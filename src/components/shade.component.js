import React, { Component, Fragment } from "react";

class Football extends React.Component {
    shoot() {
      alert("Great Shot!");
    }
    render() {
      return (
        <button></button>
      );
    }
  };
  
  function move() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 10) {
        clearInterval(id);
        } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("label").innerHTML = width * 1  + '%';
        }
    }
    var slideIndex = 1;
          showDivs(slideIndex);
  
          function plusDivs(n) {
          showDivs(slideIndex += n);
          }
  
          function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";  
          }
          x[slideIndex-1].style.display = "block";  
          }
  }
export default class shade extends Component {
    
    render() {
        return (  
            <div className="App">           
            <form>               
                <p className="text_header_shade">Shade 1 คำถามเชิงจิตวิทยาวัดทักษะของนักศึกษา</p>
                <div className="form-group">
                    <label className= "text_content1_shade1">คำชี้แจง: โปรดให้คะแนนที่ตรงกับระดับความสามารถของท่านมากที่สุดโดยลากแถบเลื่อน (Slider Scales)<br />
                          กำหนดเกณฑ์ 0 หมายถึง ไม่มีความสามารถ จนถึง 100 หมายถึง มีความสามารถมากที่สุด</label>
                </div>
                <div className="text_content2_shade1">
                    <p className="text_content2_shade1" >คลิกปุ่ม "ถัดไป" เพื่อทำแบบทดสอบ</p>
                </div> 
                
                <button className="button_shade1" onclick="plusSlides(-1)">ย้อนกลับ</button>
                <button className="button_shade2" onclick="plusSlides(1)" >ถัดไป</button>   
                
            </form>  
               
    </div>          
        );              
    }
    }

