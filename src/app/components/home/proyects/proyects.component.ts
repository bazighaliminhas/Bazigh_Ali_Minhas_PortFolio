import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  Projects = [

    {
      imgs:[
      '../../../../assets/images/Weather_ForeCast/Weather_ForeCast.png',
       
        ],
      Title:'Platform For The Faculty Of Commerce',
      Description:`we designed and developed a comprehensive online platform for the Faculty of Commerce,
      streamlining the application process for master's and professional diploma programs
      This platform enables students to submit applications online and provides realtime application
      status tracking until final approval.
      It also facilitates efficient file uploads and processing by staff, ultimately leading to student
      acceptance
      Additionally, the system allows accepted students to view available subjects within their chosen
      diploma and select their preferred courses`,
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS', 'NodeJs'],
      ghLink:'https://github.com/bazighaliminhas/Bazigh_Weather_ForeCast',
      demoLink:'https://bazigh-weather-fore-cast.vercel.app/'
    },



    {
      
      imgs:[
        '../../../../assets/images/eSoftage_Soltuion/eSoftageSolution.png',
        ],
      Title:'eSoftage Solution',
      Description:"The e-commerce project you're working on includes essential functionalities for both users and admins. Users can browse products, add them to their cart, proceed to checkout where they input their information, and submit their order. On the admin side, there's a panel for managing orders, viewing details, and updating order statuses. This setup ensures a seamless experience for both purchasing customers and administrative staff, facilitating efficient order management and customer service using firbase.",
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS', 'firebase'],
      ghLink:'https://github.com/bazighaliminhas/EsoftageSolution',
      demoLink:'https://esoftage-solution.vercel.app'
    },

    {
      imgs:[
      '../../../../assets/images/Bazigh_AliPortFolio/Bazigh_AliPortFolio.png',
       
        ],
      Title:'PortFolio',
      Description:`we designed and developed a comprehensive online platform for the Faculty of Commerce,
      streamlining the application process for master's and professional diploma programs
      This platform enables students to submit applications online and provides realtime application
      status tracking until final approval.
      It also facilitates efficient file uploads and processing by staff, ultimately leading to student
      acceptance
      Additionally, the system allows accepted students to view available subjects within their chosen
      diploma and select their preferred courses`,
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS', 'NodeJs'],
      ghLink:'https://github.com/bazighaliminhas/Bazigh_AliPortFolio',
      demoLink:'https://bazigh-ali-port-folio.vercel.app/'
    },





    {
      
      imgs:[
        '../../../../assets/images/footcap/2.PNG',
        '../../../../assets/images/footcap/Capture.PNG',
        '../../../../assets/images/footcap/10.PNG',
        '../../../../assets/images/footcap/3.PNG',
        '../../../../assets/images/footcap/4.PNG',
        '../../../../assets/images/footcap/5.PNG',
        '../../../../assets/images/footcap/6.PNG',
        '../../../../assets/images/footcap/7.PNG',
        '../../../../assets/images/footcap/8.PNG',
        '../../../../assets/images/footcap/9.PNG',

        ],
      Title:'FootCap',
      Description:"The e-commerce project you're working on includes essential functionalities for both users and admins. Users can browse products, add them to their cart, proceed to checkout where they input their information, and submit their order. On the admin side, there's a panel for managing orders, viewing details, and updating order statuses. This setup ensures a seamless experience for both purchasing customers and administrative staff, facilitating efficient order management and customer service using firbase.",
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS', 'firebase'],
      ghLink:'https://github.com/bazighaliminhas/footcap',
      demoLink:'https://footcap-six.vercel.app'
    },




    {
      
      imgs:[
        '../../../../assets/images/medmatch/screenshot.png',
        '../../../../assets/images/medmatch/screenshot (1).png',
        '../../../../assets/images/medmatch/screenshot (2).png',
        '../../../../assets/images/medmatch/screenshot (3).png'],
      Title:'Med Match',
      Description:'The purpose of this project is to enhance the safety of prescribing drugs and to address the challenges related to prescribing errors which can have significant damage the patient’s health, the project ultimate goal is to contribute to the overall improvement of medication safety in the healthcare department.',
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS', 'Node.js'],
      ghLink:'https://github.com/loayeldin/medmatch',
      demoLink:'https://medmatchh.netlify.app/'
    },





    {
      imgs:[
        '../../../../assets/images/bahie-portfolio/1.PNG',
        '../../../../assets/images/bahie-portfolio/2.PNG',
        '../../../../assets/images/bahie-portfolio/3.PNG',
        '../../../../assets/images/bahie-portfolio/4.PNG',
      ],
      Title:'Portfolio For Visual Artist',
      Description:'Users can add, edit, delete, and prioritize tasks. Each task typically contains a title, description, due date, and status. The app allows users to reorder tasks by dragging and dropping them into different categories or positions, making it easy to organize and prioritize tasks.',
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS'],
      // ghLink:'https://github.com/loayeldin/bahie-portfolio', 
      demoLink:'https://bahie-visual-artist.vercel.app'
    },













    {
      imgs:[
        '../../../../assets/images/todo-app/1.PNG',
        '../../../../assets/images/todo-app/2.PNG',
        '../../../../assets/images/todo-app/3.PNG',
      ],
      Title:'Dynamic Todo App',
      Description:'Users can add, edit, delete, and prioritize tasks. Each task typically contains a title, description, due date, and status. The app allows users to reorder tasks by dragging and dropping them into different categories or positions, making it easy to organize and prioritize tasks.',
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS'],
      ghLink:'https://github.com/bazighaliminhas/dynamic_todo_app',
      demoLink:'https://dynamic-todo-app.netlify.app/'
    },
    {
      imgs:[
      
        '../../../../assets/images/recipe-book/screenshot (1).png',
        '../../../../assets/images/recipe-book/screenshot (2).png',
        '../../../../assets/images/recipe-book/screenshot (3).png',
      ],
      Title:'Recipe Book',
      Description:'Users can add new recipes to their collection and categorize them based on different types of cuisines or meal types. Each recipe includes a comprehensive list of ingredients required for the dish, making it convenient for users to shop for the necessary items.',
      Technologies:['Angular','Css','Angular-Material' , 'RxJS','firebase'],
      ghLink:'https://github.com/bazighaliminhas/recipe-book',
      demoLink:'https://recipe-book-theta-blue.vercel.app'
    },
    {
      imgs:[
        '../../../../assets/images/design-show/1.png',
        '../../../../assets/images/design-show/2.png',
        '../../../../assets/images/design-show/4.PNG',
      ],
      Title:'Design Show',
      Description:'Design Show provides a user-friendly interface that enables artists and designers to upload high-quality images and multimedia content, along with detailed project descriptions. This allows viewers to explore the creative process and context behind each artwork.',
      Technologies:['Html','SCSS','JavaScript' , 'Jquery', 'animation-libraries'],
      ghLink:'',
      demoLink:'https://design-show.netlify.app/'
    },

  
    {
      imgs:[
      
        '../../../../assets/images/typing-speed/1.png',
   
      ],
      Title:'Typing Speed Test',
      Description:` The application measures the number of words or characters typed per minute (words per minute - WPM or characters per minute - CPM) to determine the user's typing speed. In addition to speed, the test evaluates typing accuracy by calculating the number of errors made during the typing exercise.`,
      Technologies:['Html','CSS','JavaScript' , 'Jquery'],
      ghLink:'https://github.com/bazighaliminhas/typing-speed-test',
      demoLink:'https://typingspeedgamee.netlify.app/'
    },

    


  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
