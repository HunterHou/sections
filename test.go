package main

import (
	"bufio"
	"flag"
	"fmt"
	"os"
	filepath2 "path/filepath"
	"strings"
)
import "./model"


var path string
// 将小说 俺章节拆分多个文本文件
func init()  {
	flag.StringVar(&path,"path","d:\\6028.txt","logo")
}

func main() {
	filepath := path
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
			if title !="" {
				curNovel := model.Novel{
					Title:   title,
					Context: context,
				}
				novels = append(novels, curNovel)
			}
			title = lineStr
		}
		context += "\n"+lineStr
		//context+="/r/n"
	}
	for _, nove := range novels {
		fmt.Println(nove.Title)
		filename := nove.Title + ".txt"
		curPath,_:=filepath2.Abs(".")
		curPath=curPath+"\\novel\\"
		section, createErr := os.Create(curPath+filename,)
		if createErr != nil {
			fmt.Println("创建失败",createErr)
			break
		}
		defer section.Close()
		section.WriteString(nove.Context)
	}
}
