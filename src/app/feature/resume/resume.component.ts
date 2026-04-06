import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  readonly panelOpenState = signal(false);
  resumeContents: resumeContent[] = [
    {
      title: 'PROFILE SUMMARY',
      panelDesc: '',
      contentDesc: `Full Stack Developer with 4+ years of experience in designing and developing robust, scalable, and 
user-centric web applications using Angular, Java and modern JavaScript frameworks. Currently 
working at BMW TechWorks India as a Senior Software Developer, contributing to official BMW 
retail and registration websites. Skilled in Micro Frontend architecture using Nx and Nrwl, and 
proficient in Java and Node.js for backend services. Adept at building microservices and responsive 
UIs, with a growing passion for cloud technologies and clean architecture. `,
    },
    {
      title: 'EMPLOYMENT HISTORY',
      panelDesc: '',
      contentDesc: `BMW TechWorks India, Chennai 
Senior Software Developer 
Jan 2025 – Present 
Key Contributions: - Developing and maintaining official BMW retail and vehicle registration websites. - Leveraging Micro Frontend Architecture (MFE) using Nx and Nrwl, enabling modular and 
scalable development across multiple teams. - Built backend services using Java and Node.js, integrating seamlessly with frontend components. - Enhanced web performance by optimizing code bundles, lazy loading modules, and implementing 
caching techniques. - Contributed to reusable shared libraries improving consistency and reducing development time 
across projects. 
Tata Consultancy Services, Chennai 
Application Development Engineer 
Nov 2021 – Jan 2025 
Key Contributions: - Developed and maintained enterprise-grade full stack web applications using Angular and Java 
(Spring Boot), serving thousands of users across TCS. - Designed and implemented modular microservices and REST APIs for various internal tools like 
Compensation Management, Annual Bonus Review, and Quarterly Variable Allowance 
systems. - Built highly responsive and interactive UIs with Angular, incorporating standalone components, 
lazy loading, and state management to improve performance by 30%. - Implemented role-based access controls, ensuring secure access and granular permissions for 
different user roles. - Integrated frontend and backend systems seamlessly, leading to smooth workflows and reduced 
API integration time. - Led a team of 20 developers, overseeing project planning, code reviews, and best practices 
adherence. - Recognized with the Special Initiative Award for innovation and technical leadership. - Optimized existing systems by reducing frontend load time and improving backend response 
through DB query tuning and component optimization. `,
    },
    {
      title: 'EDUCATION',
      panelDesc: 'B.E. Mechatronics Engineering',
      contentDesc: `Park College of Engineering and Technology, Coimbatore (2017 – 2021)`,
    },
    {
      title: 'SKILLS',
      contentDesc: `Frontend: Angular, Typescript, JavaScript, HTML5, CSS3 
Backend: Java, Spring Boot, Node.js, Microservices, REST APIs 
Architecture: Micro Frontend (Nx, Nrwl), Monorepos 
Databases: PostgreSQL, SQL 
Development: Agile Methodologies, CI/CD, Unit Testing`,
    },
  ];
}
interface resumeContent {
  title: string;
  panelDesc?: string;
  contentDesc?: string;
}
