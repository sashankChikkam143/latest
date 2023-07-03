import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box,container } from '@mui/material';
import { srisailamimages } from '../data';
import ImageSlider from './imageSlider';

const  StandardImageList=()=> {
  return (
    <container>
    <Box>
    <ImageSlider Images={srisailamimages} place="siddhu"/>
    </Box>
    <Box>
    <ImageSlider Images={srisailamimages} place="siddhu"/>
    </Box>
    <Box>
    <ImageSlider Images={srisailamimages} place="siddhu"/>
    </Box>

    </container>
  );
}
export default StandardImageList;