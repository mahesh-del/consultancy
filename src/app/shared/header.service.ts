import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  headerMenu=[
    {
      "label":"Careers",
      "route":"careers"
    },
    {
      "label":"Contact",
      "route":"contact"
    }
  ];

  empowerList=[
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
      "iconClass": "fa-solid fa-network-wired fs-1",
      "cardTitle": "Network Infrastructure",
      "cardText": "Optimize your network infrastructure with our advanced networking solutions."
    },
    {
      "iconClass": "fa-solid fa-calendar-alt fs-1",
      "cardTitle": "Event Management",
      "cardText": "Plan and execute successful events with our comprehensive event management services."
    },
    {
      "iconClass": "fa-solid fa-briefcase fs-1",
      "cardTitle": "Professional Consulting",
      "cardText": "Gain strategic insights with our professional consulting services tailored to your industry."
    },
    {
      "iconClass": "fa-solid fa-calendar-alt fs-1",
      "cardTitle": "Event Management",
      "cardText": "Plan and execute successful events with our comprehensive event management services."
    }
  ];

  discover=[
    {
      "img":"https://images.pexels.com/photos/4549831/pexels-photo-4549831.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "cardTitle": "How Cloud Computing Is Revolutionizing the IT Industry",
      "cardText": "Cloud computing is revolutionizing the IT industry with benefits like scalability, cost-effectiveness, security, collaboration, and a competitive edge. It has become an essential part of any business strategy, enabling businesses to improve efficiency and productivity."
    },
    {
      "img":"https://images.pexels.com/photos/13194386/pexels-photo-13194386.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "cardTitle": "The Impact of Artificial Intelligence in Healthcare",
      "cardText": "Artificial intelligence (AI) is transforming the healthcare industry by improving diagnostics accuracy, personalized treatment plans, and operational efficiency. It has the potential to revolutionize patient care, reducing costs and enhancing patient outcomes."
    },
    { 
      "img":"https://images.pexels.com/photos/9758237/pexels-photo-9758237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "cardTitle": "The Future of Renewable Energy",
      "cardText": "Renewable energy sources such as solar, wind, and hydroelectric power are shaping the future of energy sustainability. They offer environmentally friendly alternatives to fossil fuels, reducing carbon emissions and mitigating climate change impacts."
    }
            
  ];

  socialMedia=  [
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
  
  contact=
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
      "text": "support@trestellae.com"
    }
  ];

  getContact()
  {
    return this.contact;
  }
  
  
  

  getMenuItems()
  {
    return this.headerMenu
  }

  getEmpower()
  {
    return this.empowerList;
  }

  getDiscover()
  {
    return this.discover;
  }

  getSocial()
  {
    return this.socialMedia;
  }
}
