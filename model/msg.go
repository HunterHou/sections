package model

type Msg struct {
	Code    string
	Message string
	Data    interface{}
}

func (msg Msg) ToString() string {
	return "code:" + msg.Code + " msg:" + msg.Message
}

func SuccessMsgNew() Msg {
	return Msg{Code: Success}
}
func FailMsgNew() Msg {
	return Msg{Code: Fail}
}
