
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School'; // Icon for school
import ApartmentIcon from '@mui/icons-material/Apartment'; // Icon for college/institution
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" className='text-white' >
      {/* High School Item */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          className='text-gray-400'
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: 'purple' }}>
            <SchoolIcon sx={{ color: 'white' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span" typography={{ fontWeight: 'bold' }}>
            High School
          </Typography>
          <Typography>KENDRIYA VIDYALAYA ANDREWS GANJ</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Graduation Item */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          className='text-gray-400'
        >
          2023-2027
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: 'purple' }}>
            <ApartmentIcon sx={{ color: 'white' }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography  variant="h5" component="span" typography={{ fontWeight: 'bold' }}>
            Graduation
          </Typography>
          <Typography>Bhagwan Parshuram Institute Of Technology</Typography>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}