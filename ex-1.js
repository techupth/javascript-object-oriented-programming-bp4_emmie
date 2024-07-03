class EmailNotification {
    constructor(notificationID, createdTime, content, receiver){
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send (receiver){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification {
    constructor(notificationID, createdTime, content, phoneNumber){
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber
    }
    send (phoneNumber){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

let firstEmail = new EmailNotification(1, "11:20", "Hello", "emmiie@gmail.com");
firstEmail.send();

let firstNumber = new SMSNotification(2, "11:20", "Hello", "095-5555555");
firstNumber.send();
