package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/asticode/go-astikit"
	"github.com/asticode/go-astilectron"
)
import (
	"./model"
	"./service"
)

func main() {
	log := log.New(log.Writer(), log.Prefix(), log.Flags())

	app, err := astilectron.New(log, astilectron.Options{
		AppName:           "NovelSection",
		BaseDirectoryPath: "sections",
	})
	if err != nil {
		log.Fatal(fmt.Errorf("main: creating astilectron failed: %w", err))
	}
	defer app.Close()

	app.HandleSignals()

	// Start
	if err = app.Start(); err != nil {
		log.Fatal(fmt.Errorf("main: starting astilectron failed: %w", err))
	}

	// New window
	var window *astilectron.Window
	if window, err = app.NewWindow("static/index.html", &astilectron.WindowOptions{
		Center: astikit.BoolPtr(true),
		Height: astikit.IntPtr(700),
		Width:  astikit.IntPtr(1600),
	}); err != nil {
		log.Fatal(fmt.Errorf("main: new window failed: %w", err))
	}

	// Create windows
	if err = window.Create(); err != nil {
		log.Fatal(fmt.Errorf("main: creating window failed: %w", err))
	}
	window.OpenDevTools()

	// Add a listener on the window
	window.On(astilectron.EventNameWindowEventResize, func(e astilectron.Event) (deleteListener bool) {
		log.Println("Window resized")
		return
	})
	//发消息
	initMsg := model.Msg{
		Code:    "init",
		Message: "",
		Data:    nil,
	}
	handleMsg(window, initMsg)
	//处理消息
	window.OnMessage(func(m *astilectron.EventMessage) interface{} {
		// Unmarshal
		var data string
		m.Unmarshal(&data)
		// Process message
		msg := StrToMsg(data)
		fmt.Println("go收到消息" + msg.ToString())
		return handleMsg(window, msg)
	})

	// Blocking pattern
	app.Wait()
}

func StrToMsg(str string) model.Msg {
	msg := model.Msg{}
	json.Unmarshal([]byte(str), &msg)
	return msg
}

func handleMsg(win *astilectron.Window, message model.Msg) model.Msg {
	message = service.DealRouter(message)
	win.SendMessage(message, func(m *astilectron.EventMessage) {
		fmt.Println("发送消息：" + message.ToString())
		// Unmarshal
		var callback string
		if m != nil {
			err := m.Unmarshal(&callback)
			if err != nil {
				fmt.Println(err)
			}

		}
		fmt.Println("发送消息成功：" + message.ToString() + " callback：" + callback)
	})
	return message
}
