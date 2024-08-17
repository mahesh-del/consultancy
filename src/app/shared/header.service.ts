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
      map((response: any) => response.results.map((results: any) => results.formatted)));
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
      "link": "https://www.facebook.com/profile.php?id=61564602145955",
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
        "text": "382 Boston Turnpike, Suite 203, Shrewsbury, MA 01545"
      },
      {
        "type": "phone",
        "icon": "fa-phone",
        "text": "+1 774-367-2729"
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
      "title": "Data Engineer",
      "location": "Shrewsbury-Remote",
      "description": "Design and develop robust data pipelines to extract, transform, and load (ETL) data from various sources into data storage solutions.",
      "employmentType": "Full-time",
      "experience": "1+ years",
      "requirements": [
        "Combine data from diverse sources, including databases, APIs, and external data feeds, into a unified system",
        "Cleanse and preprocess data to ensure accuracy and consistency before it is used for analysis or reporting",
        "Develop and manage database schemas, including relational and non-relational databases",
        "Monitor and optimize database performance to ensure efficient data retrieval and storage",
        "Create and maintain data warehouses to consolidate large volumes of data from different sources for analysis and reporting",
        "Create and implement data models that represent business processes and data relationships effectively",
        "Work with big data technologies such as Hadoop, Spark, and Kafka to handle large-scale data processing and real-time data streaming",
        "Implement security measures to protect sensitive data and comply with relevant regulations and standards",
        "Control access to data systems and ensure that only authorized users can access or manipulate data",
        "Collaborate with data scientists to understand their data needs and ensure that data pipelines and infrastructure support their analytical requirements",
        "Continuously monitor data systems for performance issues, errors, or failures",
        "Maintain comprehensive documentation for data pipelines, database schemas, and data models",
        "Create reports on data processing activities, system performance, and data quality for stakeholders"
      ],
      "datePosted": "2024-08-01"
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
