import { Component, OnInit, Inject } from '@angular/core';

//import service เข้ามา (userlevel)
import { UserlevelService } from '../userlevel.service';

@Component({
  selector: 'app-userlevel',
  templateUrl: './userlevel.component.html',
  styleUrls: ['./userlevel.component.scss']
})
export class UserlevelComponent implements OnInit {
  //สร้างตัวแปร ชนิด json เปล่าๆ  มารับค่า
  alluserlevel: any = [];
  open: boolean = false;
  UserLevelID: any;
  UserLevelName: any;
  isUpdate: boolean = false;

  constructor(
    private userlevelService: UserlevelService
  ) { }

  ngOnInit() {
    this.showAllUserlevel();
  }

  showAllUserlevel() {
    this.alluserlevel = [];
    this.userlevelService.getAllUserLevel()
      .then((results: any) => {
        if (results.ok) {
          this.alluserlevel = results.rows;
          console.log(this.alluserlevel);
        } else {
          console.log(JSON.stringify(results.error));
        }
      })
      .catch(() => {
        console.log("Server Error");
      })
  }

  Showedit(l) {
    this.isUpdate = true;
    this.UserLevelID = l.ul_id;
    this.UserLevelName = l.ul_name;
    this.open = true;
  }

  deleteData(l) {
    this.UserLevelID = l.ul_id;
    this.userlevelService.delete(this.UserLevelID)
      .then((results: any) => {
        if (results.ok) {
          console.log("ลบข้อมูลสำเร็จ");
          this.showAllUserlevel();
          this.UserLevelID = null;
          this.open = false;
        } else {
          console.log("ลบข้อมูลไม่สำเร็จ");
        }
      })
      .catch(() => {
        console.log("Server Error");
      })
  }


//function นี้ใช้เปิด Modal ขึ้นมา
OpenModal() {
  this.open = true
}
// function นี้ ใช้บันทึข้อมูลลงไปในฐานผ่าน Service (userlevelService)
save(){
  console.log("on Save Function");
  if (this.isUpdate) {
    this.updateData();
  } else {
    this.addData();
  }
}

addData() {
  console.log(this.UserLevelID);
  console.log(this.UserLevelName);
  if (this.UserLevelID && this.UserLevelName) {
    this.userlevelService.save(this.UserLevelID, this.UserLevelName)
      .then((results: any) => {
        if (results.ok) {
          console.log("เพิ่มข้อมูลสำเร็จ");
          this.showAllUserlevel();
          this.UserLevelID = null;
          this.UserLevelName = null;
          this.open = false;
        } else {
          console.log("เพิ่มข้อมูลไม่สำเร็จ");
        }
      })
      .catch(() => {
        console.log("Server Error");
      })
  } else {
    console.log("กรอกข้อมูลไม่ครบ");
  }
}

updateData() {
  console.log(this.UserLevelID);
  console.log(this.UserLevelName);
  console.log("On Update Function");
  if (this.UserLevelID && this.UserLevelName) {
    this.userlevelService.Update(this.UserLevelID, this.UserLevelName)
      .then((results: any) => {
        if (results.ok) {
          console.log("เพิ่มข้อมูลสำเร็จ");
          this.showAllUserlevel();
          this.UserLevelID = null;
          this.UserLevelName = null;
          this.open = false;
        } else {
          console.log("เพิ่มข้อมูลไม่สำเร็จ");
        }
      })
      .catch(() => {
        console.log("Server Error");
      })
  } else {
    console.log("กรอกข้อมูลไม่ครบ");
  }
}


}
