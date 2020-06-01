package service

import (
	"../model"
)

func DealRouter(msg model.Msg) model.Msg {
	if msg.Code == model.ChooseFile {
		ReadFile(msg.Message)
		msg.Data = model.LibMenu
	}
	if msg.Code == model.FindOne {
		msg.Data = model.LibMap[msg.Message]
	}
	return msg
}
