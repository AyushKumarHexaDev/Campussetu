export type Student={id:string;name:string;college:string;branch:string;semester:number;skills:string[];goal:string;availability:string;match:number;reason:string}
export type Senior={id:string;name:string;college:string;branch:string;semester:number;skills:string[];experience:string;topics:string[]}
export type Resource={id:string;title:string;subject:string;semester:number;branch:string;year:number;type:string;questions:number;description:string}
export type Opportunity={id:string;category:string;title:string;description:string;date:string;organization:string;scope:string}
export type StudyPod={id:string;title:string;goal:string;members:number;time:string;status:string;subject:string}
export type Message={id:string;name:string;text:string;time:string}
export type RoadmapItem={id:string;title:string;status:"completed"|"progress"|"upcoming";progress:number}
export type StudySession={id:string;title:string;minutes:number;date:string}