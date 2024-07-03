class Notification {
    constructor(notificationId, createdTime, content, receiver) {
      this.notificationId = notificationId;
      this.createdTime = createdTime;
      this.content = content;
      this.receiver = receiver;
    }
    send() {
      console.log(`Notification has been sent to ${this.receiver}`);
    }
  }
  
  class EmailNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
      super(notificationId, createdTime, content, receiver);
    }
  }
  
  class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
      super(notificationId, createdTime, content, receiver);
    }
  }
  
  let emailNotification = new EmailNotification(1, "10.30", "Hello", "emmiie@gmail.com")
  emailNotification.send();
  
  let smsNotification = new SMSNotification(2, "10.30", "Hello", "095-5555555");
  smsNotification.send();
  
