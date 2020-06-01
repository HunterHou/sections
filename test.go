package main

import (
	"fmt"
	"os"
	filepath2 "path/filepath"
)
import (
	"./data"
	"./service"
)

var path string

// 将小说 俺章节拆分多个文本文件

func main() {
	service.ReadFile("static/6028.txt")
	for _, nove := range data.LibNovel {
		fmt.Println(nove.Title)
		filename := nove.Title + ".txt"
		curPath, _ := filepath2.Abs(".")
		curPath = curPath + "\\novel\\"
		section, createErr := os.Create(curPath + filename)
		if createErr != nil {
			fmt.Println("创建失败", createErr)
			break
		}
		defer section.Close()
		section.WriteString(nove.Context)
	}
}
