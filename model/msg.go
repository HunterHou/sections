package model

type Msg struct {
	Code    string
	Message string
	Data    interface{}
}

func (msg Msg) ToString() string {
	return "code:" + msg.Code + " msg:" + msg.Message
}

func NewSuccess() Msg {
	return Msg{Code: Success}
}
func NewFail() Msg {
	return Msg{Code: Fail}
}
