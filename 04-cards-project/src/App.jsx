import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    id: 1,
    companyName: "Google",
    logo: "https://i.pinimg.com/736x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    datePosted: "5 days ago",
    role: "Frontend Software Engineer",
    tags: "Full Time",
    level: "Junior Level",
    payPerHour: 85,
    location: "Bangalore, India"
  },
  {
    id: 2,
    companyName: "Meta",
    logo: "https://i.pinimg.com/736x/d4/6e/05/d46e0541bcc23534d9610a42e4c97b7c.jpg",
    datePosted: "2 days ago",
    role: "Product Designer",
    tags: "Full Time",
    level: "Senior Level",
    payPerHour: 110,
    location: "Menlo Park, USA"
  },
  {
    id: 3,
    companyName: "Apple",
    logo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    datePosted: "1 week ago",
    role: "iOS Software Engineer",
    tags: "Full Time",
    level: "Mid Level",
    payPerHour: 105,
    location: "Cupertino, USA"
  },
  {
    id: 4,
    companyName: "Amazon",
    logo: "https://i.pinimg.com/736x/3a/b5/92/3ab592044ca880f91e97773f739d8398.jpg",
    datePosted: "3 days ago",
    role: "Backend Engineer",
    tags: "Full Time",
    level: "Senior Level",
    payPerHour: 95,
    location: "Hyderabad, India"
  },
  {
    id: 5,
    companyName: "Netflix",
    logo: "https://i.pinimg.com/1200x/e5/5e/8a/e55e8af0607d1e57122667ab40a1dd1a.jpg",
    datePosted: "6 days ago",
    role: "Senior UI/UX Designer",
    tags: "Part Time",
    level: "Senior Level",
    payPerHour: 120,
    location: "Los Angeles, USA"
  },
  {
    id: 6,
    companyName: "Microsoft",
    logo: "https://i.pinimg.com/736x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg",
    datePosted: "4 days ago",
    role: "Cloud Solutions Engineer",
    tags: "Full Time",
    level: "Mid Level",
    payPerHour: 90,
    location: "Redmond, USA"
  },
  {
    id: 7,
    companyName: "Tesla",
    logo: "https://i.pinimg.com/736x/29/92/5a/29925ae71627c8ba50710db01fcd2c57.jpg",
    datePosted: "2 weeks ago",
    role: "Software Engineer – Autopilot",
    tags: "Full Time",
    level: "Senior Level",
    payPerHour: 115,
    location: "Austin, USA"
  },
  {
    id: 8,
    companyName: "Adobe",
    logo: "https://i.pinimg.com/736x/7d/3a/a4/7d3aa450915125e7948175e1123a199a.jpg",
    datePosted: "3 days ago",
    role: "Frontend Engineer (React)",
    tags: "Part Time",
    level: "Junior Level",
    payPerHour: 75,
    location: "Noida, India"
  },
  {
    id: 9,
    companyName: "Uber",
    logo: "https://i.pinimg.com/1200x/ae/4b/ea/ae4bea0613c0b0abd7e0b18432d92c6f.jpg",
    datePosted: "5 days ago",
    role: "Mobile App Developer",
    tags: "Full Time",
    level: "Mid Level",
    payPerHour: 100,
    location: "San Francisco, USA"
  },
  {
    id: 10,
    companyName: "Spotify",
    logo: "https://i.pinimg.com/736x/5f/e6/73/5fe673113aeec57a8cb28ee3aa87a314.jpg",
    datePosted: "1 day ago",
    role: "Data Engineer",
    tags: "Full Time",
    level: "Senior Level",
    payPerHour: 108,
    location: "Stockholm, Sweden"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem , idx) { 
        return (
          <div key={idx}>
            <Card company={elem.companyName} logo={elem.logo} datePosted={elem.datePosted} role={elem.role} tags={elem.tags} level={elem.level} payPerHour={elem.payPerHour} location={elem.location} />
          </div>
        )
      })}
    </div>
  )
}

export default App
