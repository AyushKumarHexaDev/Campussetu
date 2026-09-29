import {Student,Senior,Resource,Opportunity,StudyPod,RoadmapItem,Message,StudySession} from "../types";
export const currentStudent={name:"Shubham Kumar",college:"Government Polytechnic Muzaffarpur",branch:"Computer Science & Engineering",semester:3,goal:"Placement + Web Development",focus:"Data Structures",skills:["C","C++","HTML","CSS","JavaScript","React","Tailwind CSS","Node.js"],subjects:["Data Structures","C Programming","Web Technology"],availability:"7 PM – 10 PM"};
export const students:Student[]=[
{id:"s1",name:"Rahul Kumar",college:"Government Polytechnic Muzaffarpur",branch:"CSE",semester:3,skills:["C","DSA","React"],goal:"Placement",availability:"7 PM – 10 PM",match:92,reason:"Same semester + DSA + placement goal"},
{id:"s2",name:"Anjali Singh",college:"Government Polytechnic Patna",branch:"CSE",semester:3,skills:["JavaScript","React","Tailwind"],goal:"Web Development",availability:"8 PM – 10 PM",match:88,reason:"Same semester + web development"},
{id:"s3",name:"Aman Raj",college:"Government Polytechnic Gaya",branch:"CSE",semester:4,skills:["C++","DSA","CP"],goal:"Competitive Programming",availability:"6 PM – 9 PM",match:81,reason:"DSA overlap + similar study schedule"},
{id:"s4",name:"Priya Kumari",college:"Government Polytechnic Muzaffarpur",branch:"CSE",semester:2,skills:["HTML","CSS","JS"],goal:"Internship",availability:"7 PM – 9 PM",match:76,reason:"Web skills + internship goal"}];
export const seniors:Senior[]=[
{id:"m1",name:"Rohit Sharma",college:"Government Polytechnic Patna",branch:"CSE",semester:6,skills:["React","Node.js","Git"],experience:"Frontend developer intern",topics:["Placement","Internship","Projects","Web Development"]},
{id:"m2",name:"Neha Verma",college:"Government Polytechnic Muzaffarpur",branch:"CSE",semester:6,skills:["DSA","C++","Java"],experience:"Placement preparation mentor",topics:["Placement","Programming","Exam Preparation"]},
{id:"m3",name:"Vikas Kumar",college:"Government Polytechnic Patna",branch:"CSE",semester:5,skills:["Node.js","MongoDB","React"],experience:"Full-stack project builder",topics:["Projects","Internship","Web Development"]}];
export const communities=["DSA Study Circle","Web Development","Competitive Programming","Hackathon Builders"];
export const resources:Resource[]=[
{id:"r1",title:"2025 Data Structures PYQ",subject:"Data Structures",semester:3,branch:"CSE",year:2025,type:"Previous Year Question Paper",questions:8,description:"Mock CSE 3rd semester paper covering arrays, linked lists, stacks, queues and complexity."},
{id:"r2",title:"2024 C Programming PYQ",subject:"C Programming",semester:3,branch:"CSE",year:2024,type:"Previous Year Question Paper",questions:10,description:"Mock practice paper for C fundamentals, functions, arrays, structures and pointers."},
{id:"r3",title:"2025 Web Technology Notes",subject:"Web Technology",semester:3,branch:"CSE",year:2025,type:"Notes",questions:0,description:"Frontend revision pack covering HTML, CSS and JavaScript."},
{id:"r4",title:"2023 Digital Electronics PYQ",subject:"Digital Electronics",semester:3,branch:"Electronics",year:2023,type:"Previous Year Question Paper",questions:9,description:"Demo resource for digital logic practice."}];
export const opportunities:Opportunity[]=[
{id:"o1",category:"Hackathon",title:"INNOVATE-X 2026",description:"Build solutions for real student and community problems.",date:"Oct 12, 2026",organization:"Campus Innovation Club",scope:"All Polytechnics"},
{id:"o2",category:"Internship",title:"Frontend Development Internship",description:"A fictional demo opportunity focused on HTML, CSS, JavaScript and React.",date:"Applications open",organization:"WebWorks Labs",scope:"All Polytechnics"},
{id:"o3",category:"Workshop",title:"Git & GitHub for Beginners",description:"Hands-on version-control workshop for students.",date:"Oct 05, 2026",organization:"Developer Student Circle",scope:"My College"},
{id:"o4",category:"Exam",title:"3rd Semester Examination Update",description:"Fictional demo announcement for examination preparation.",date:"Oct 20, 2026",organization:"Academic Cell",scope:"My Branch"}];
export const studyPods:StudyPod[]=[{id:"p1",title:"DSA — Linked List Mastery",goal:"Complete linked list revision and solve 5 PYQs.",members:4,time:"Today · 7:00 PM",status:"Starting soon",subject:"Data Structures"}];
export const initialMessages:Message[]=[
{id:"msg1",name:"Rahul",text:"Can someone explain why deletion takes O(1) here?","time":"7:14 PM"},
{id:"msg2",name:"Neha",text:"Only if we already have the node reference.","time":"7:15 PM"},
{id:"msg3",name:"Aman",text:"Let's solve the PYQ together.","time":"7:16 PM"}];
export const roadmap:RoadmapItem[]=[
{id:"html",title:"HTML",status:"completed",progress:100},{id:"css",title:"CSS",status:"completed",progress:100},{id:"js",title:"JavaScript",status:"completed",progress:100},{id:"react",title:"React",status:"progress",progress:70},{id:"node",title:"Node.js",status:"progress",progress:20},{id:"db",title:"Database",status:"upcoming",progress:0},{id:"api",title:"API",status:"upcoming",progress:0},{id:"deploy",title:"Deployment",status:"upcoming",progress:0},{id:"project",title:"Project",status:"upcoming",progress:0}];
export const studySessions:StudySession[]=[{id:"a",title:"DSA",minutes:48,date:"Today"},{id:"b",title:"JavaScript",minutes:35,date:"Yesterday"},{id:"c",title:"React",minutes:52,date:"Sep 27"}];