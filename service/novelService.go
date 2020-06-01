package service

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)
import (
	"../model"
)

func Nothing() {

}

func ReadFile(filepath string) {
	outStream, openErr := os.Open(filepath)
	if openErr != nil {
		fmt.Println("openErr", openErr)
	}
	defer outStream.Close()
	reader := bufio.NewReader(outStream)

	var novelsMap = map[string]model.Novel{}
	var menus []string
	title := ""
	context := ""
	for {
		lineStr, err := reader.ReadString('\n')
		if err != nil {
			break
		}
		lineStr = strings.TrimSpace(lineStr)
		if lineStr == "" {
			continue
		}
		if strings.HasPrefix(lineStr, "第") && strings.Contains(lineStr, "章") {
			//开始章节
			if title != "" {
				curNovel := model.Novel{
					Title:   title,
					Context: context,
				}
				novelsMap[title] = curNovel
				menus = append(menus, title)
				context = ""
			}
			title = lineStr
		}
		context += "<br>" + lineStr
	}
	model.LibMap = novelsMap
	model.LibMenu = menus
}
