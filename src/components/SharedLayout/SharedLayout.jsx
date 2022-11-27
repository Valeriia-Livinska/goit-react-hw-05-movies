import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Box p={30} px>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
