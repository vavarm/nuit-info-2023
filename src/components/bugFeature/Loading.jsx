import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel({ progress, setProgress }) {

    const [reverse, setReverse] = useState(false);


    useEffect(() => {
        if(progress !== 99 && !reverse){
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 90 ? prevProgress + 1 : prevProgress + 10));
            }, 80);
            return () => {
                clearInterval(timer);
            };
        }
        else{
            setReverse(true);
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 90 ? prevProgress - 1 : prevProgress - 10));
            }, 80);
            return () => {
                clearInterval(timer);
            };
        }
    }, [progress]);

    return <CircularProgressWithLabel value={progress} />;
}