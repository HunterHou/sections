package service

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)
import (
	"../data"
	"../model"
)

func ReadFile(filepath string) {
	outStream, openErr := os.Open(filepath)
	if openErr != nil {
		fmt.Println("openErr", openErr)
	}
	defer outStream.Close()
	reader := bufio.NewReader(outStream)

	var novels = []model.Novel{}
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
				novels = append(novels, curNovel)
			}
			title = lineStr
		}
		context += "\n" + lineStr
	}
	data.LibNovel = novels
}
