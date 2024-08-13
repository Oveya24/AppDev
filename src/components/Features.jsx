// import React from 'react';
// import { Link } from 'react-router-dom';
// import CalendarIcon from '../assests/CalendarIcon.svg'; // Update the path as necessary
// import RequestTimeOffIcon from '../assests/RequestTimeOffIcon.svg'; // Update the path as necessary
// import ProgressStatusIcon from '../assests/ProgressStatusIcon.svg'; // Update the path as necessary
// import OtherIcon from '../assests/OtherIcon.svg'; // Update the path as necessary
// import './Features.css'; // Import the CSS file

// const features = [
//   {
//     id: 1,
//     title: 'Calendar',
//     description: 'View and manage staff schedules with our intuitive calendar.',
//     icon: CalendarIcon,
//     route: '/calendar',
//   },
//   {
//     id: 2,
//     title: 'Request Time Off',
//     description: 'Easily request time off and get approvals from your manager.',
//     icon: RequestTimeOffIcon,
//     route: '/request-time-off',
//   },
//   {
//     id: 3,
//     title: 'Progress Status',
//     description: 'Track the progress of your tasks and assignments in real-time.',
//     icon: ProgressStatusIcon,
//     route: '/progress-status',
//   },
//   {
//     id: 4,
//     title: 'Others',
//     description: 'Explore other features and tools available in TimeTrek.',
//     icon: OtherIcon,
//     route: '/others',
//   },
// ];

// const Features = () => {
//   return (
//     <div className="features-container">
//       {features.map((feature) => (
//         <div key={feature.id} className="feature-card">
//           <Link to={feature.route} className="feature-link">
//             <img src={feature.icon} alt={feature.title} className="feature-icon" />
//             <div className="feature-content">
//               <h2 className="feature-title">{feature.title}</h2>
//               <p className="feature-description">{feature.description}</p>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Features;
