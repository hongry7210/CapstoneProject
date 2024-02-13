import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message:"ㅎㅇㅎㅇ",
    },
    {
        messege: "점심식사 시간",
    },
    {
        message: "이제 곧 미팅 시작",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);
        /* notifications 라는 이름의 빈 배열을 state 에 넣기 */
        this.state ={
            notifications: [],
        };

    }   
    /* 1초마다 정해진 직업 사용*/
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                /*setState 함수 사용*/
                this.setState({
                    notifications: notifications,
                });
            } else{
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message} />;
                })}
            </div>
        );
    }
}