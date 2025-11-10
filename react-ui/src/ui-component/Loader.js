import React from 'react';

// material-ui
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

//-----------------------|| Loader ||-----------------------//

const Loader = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1301,
                width: '100%',
                '& > * + *': {
                    marginTop: 2
                }
            }}
        >
            <LinearProgress color="primary" />
        </Box>
    );
};

export default Loader;
