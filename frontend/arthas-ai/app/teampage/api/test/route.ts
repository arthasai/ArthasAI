import { NextRequest, NextResponse } from "next/server";
 
export async function GET() {

    const teamLeads = [
        {
            id: "1",
            image: "https://i.pinimg.com/originals/9c/13/5e/9c135e483264e00b70cfc5329c5e55e2.jpg",
            name: "GOWON",
            role: "Team Lead",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "2",
            image: "https://i.pinimg.com/originals/9c/13/5e/9c135e483264e00b70cfc5329c5e55e2.jpg",
            name: "GOWON",
            role: "Team Lead",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        }
    ]
    const frontend = [
        {
            id: "3",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "4",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "5",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "6",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "7",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "8",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "9",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "10",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "11",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "12",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "CHUU",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        }
    ]
    const backend = [
        {
            id: "13",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "YVES",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "14",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "YVES",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "15",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "YVES",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "16",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "YVES",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "17",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "YVES",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        }
    ]
    
    return NextResponse.json({
        message: "This is a GET request",
        data: {teamLeads: teamLeads, frontend: frontend, backend: backend},
      });
}