import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  location = inject(HttpClient);
  apiKey = "4a08ccf02e5c4741b52d91839defb00f"

  getLocation(val: any) {
    const link = `https://api.geoapify.com/v1/geocode/autocomplete?text=${val}&format=json&apiKey=${this.apiKey}`;
    return this.location.get(link).pipe(
      map((response :any) => response.results.map((results:any)=>results.formatted)));
  }
  headerMenu = [
    {
      "label": "Home",
      "route": ""
    },
    {
      "label": "Business consulting",
      "route": "business-process-consulting"
    },
    {
      "label": "Careers",
      "route": "careers"
    },
    {
      "label": "Contact",
      "route": "contact"
    }
  ];

  empowerList = [
    {
      "iconClass": "fa-solid fa-cloud fs-1",
      "cardTitle": "Cloud Computing Solutions",
      "cardText": "Explore our cloud computing solutions for scalable and secure data management."
    },
    {
      "iconClass": "fa-solid fa-code fs-1",
      "cardTitle": "Software Development",
      "cardText": "Customize your software development process with our agile methodologies."
    },
    {
      "iconClass": "fa-solid fa-briefcase fs-1",
      "cardTitle": "Professional Consulting",
      "cardText": "Gain strategic insights with our professional consulting services tailored to your industry."
    }
  ];

  discover = [
    {
      "img": "https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "cardTitle": "How Cloud Computing Is Revolutionizing the IT Industry",
      "cardText": "Cloud computing is revolutionizing the IT industry with benefits like scalability, cost-effectiveness, security, collaboration, and a competitive edge. It has become an essential part of any business strategy, enabling businesses to improve efficiency and productivity."
    },
    {
      "img": "https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "cardTitle": "The Impact of Artificial Intelligence in Healthcare",
      "cardText": "Artificial intelligence (AI) is transforming the healthcare industry by improving diagnostics accuracy, personalized treatment plans, and operational efficiency. It has the potential to revolutionize patient care, reducing costs and enhancing patient outcomes."
    },
    {
      "img": "https://images.pexels.com/photos/9758237/pexels-photo-9758237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "cardTitle": "The Future of Renewable Energy",
      "cardText": "Renewable energy sources such as solar, wind, and hydroelectric power are shaping the future of energy sustainability. They offer environmentally friendly alternatives to fossil fuels, reducing carbon emissions and mitigating climate change impacts."
    }

  ];

  socialMedia = [
    {
      "type": "Facebook",
      "link": "https://www.facebook.com/dummyprofile",
      "icon": "fa-brands fa-facebook"
    },
    {
      "type": "Twitter",
      "link": "https://www.twitter.com/dummyprofile",
      "icon": "fa-brands fa-x-twitter"
    },
    {
      "type": "Instagram",
      "link": "https://www.instagram.com/dummyprofile",
      "icon": "fa-brands fa-instagram"
    },
    {
      "type": "LinkedIn",
      "link": "https://www.linkedin.com/in/dummyprofile",
      "icon": "fa-brands fa-linkedin"
    }
  ];

  contact =
    [
      {
        "type": "address",
        "icon": "fa-house",
        "text": "Street B3 MA 01545, United States"
      },
      {
        "type": "phone",
        "icon": "fa-phone",
        "text": "+1 785-22-2914"
      },
      {
        "type": "email",
        "icon": "fa-envelope",
        "text": "info@trestellae.com"
      }
    ];

  careers = [
    {
      "id": 1,
      "title": "Senior Angular Developer",
      "location": "Chennai",
      "description": "Responsible for developing and managing web applications using Angular 10+.",
      "employmentType": "Full-time",
      "experience": "5+ years",
      "requirements": [
        "Experience with Angular 10+",
        "Proficiency in HTML, CSS, and TypeScript",
        "Knowledge of REST API and MySQL",
        "Experience with front-end engineering and various JavaScript patterns",
        "Ability to handle complete app development lifecycle independently"
      ],
      "datePosted": "2024-08-01"
    },
    {
      "id": 2,
      "title": "Full Stack Developer",
      "location": "Bangalore",
      "description": "Develop and maintain both front-end and back-end web applications.",
      "employmentType": "Part-time",
      "experience": "3+ years",
      "requirements": [
        "Proficiency in JavaScript, HTML, and CSS",
        "Experience with Node.js and Express.js",
        "Knowledge of database management with MongoDB",
        "Familiarity with Angular or React",
        "Strong problem-solving skills"
      ],
      "datePosted": "2024-08-05"
    },
    {
      "id": 3,
      "title": "UI/UX Designer",
      "location": "Remote",
      "description": "Design and improve user interfaces for web and mobile applications.",
      "employmentType": "Contract",
      "experience": "2+ years",
      "requirements": [
        "Experience with UI/UX design tools such as Figma or Adobe XD",
        "Strong portfolio showcasing design skills",
        "Understanding of user-centered design principles",
        "Ability to work collaboratively with developers",
        "Excellent communication skills"
      ],
      "datePosted": "2024-07-28"
    }
  ]


  getCareers() {
    return this.careers;
  }
  getContact() {
    return this.contact;
  }

  getMenuItems() {
    return this.headerMenu
  }

  getEmpower() {
    return this.empowerList;
  }

  getDiscover() {
    return this.discover;
  }

  getSocial() {
    return this.socialMedia;
  }
  getCareerByName(val: any) {
    return this.careers.find(item => item.title == val)
  }
}
