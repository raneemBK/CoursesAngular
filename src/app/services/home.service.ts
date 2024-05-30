import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }

  course : any = [];
  getAll(){
    this.http.get('https://localhost:7118/api/Courses/GetCourses').subscribe((res:any)=>{
      console.log(res)
      this.course = res.$values;
      console.log(this.course)
    }, err=>{
      console.log(err)
    } )
  }

  deleteCourse( id: number){
    //debugger
    this.http.delete('https://localhost:7118/api/Courses/DeleteCourse/'+ id).subscribe((res:any)=>{
      console.log(res)
      setTimeout(()=>{
        window.location.reload();
      },1000 )
    },err=>{
      console.log(err)
    } )
  }

  insertCourse(body:any){
    body.Image = this.showImage;
    this.http.post('https://localhost:7118/api/Courses/InsertCourse',body).subscribe((res:any)=>{
      console.log(res)
      // setTimeout(()=>{
      //   window.location.reload();
      // },1000 )
    },err=>{
      console.log(err)
    } )
  }

  showImage:any;
uploadImage(img : FormData){
  this.http.post('https://localhost:7118/api/Courses/UplaodImage', img).subscribe((res:any)=>{
    console.log(res);
    this.showImage = res.image;
  }, err=>{
    console.log(err);
    
  })
}

}


