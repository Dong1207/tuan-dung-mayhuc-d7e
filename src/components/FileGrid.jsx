import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import { Image as ImageIcon, VideoLibrary as VideoIcon } from '@mui/icons-material';

const FileGrid = ({ files, onFileClick }) => {
  const getFileIcon = (fileType) => {
    return fileType.startsWith('image/') ? (
      <ImageIcon sx={{ fontSize: 40 }} />
    ) : (
      <VideoIcon sx={{ fontSize: 40 }} />
    );
  };

  return (
    <Grid container spacing={2}>
      {files.map((file, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card 
            sx={{ 
              cursor: 'pointer',
              '&:hover': {
                boxShadow: 6
              }
            }}
            onClick={() => onFileClick(file)}
          >
            <CardMedia
              component="div"
              sx={{
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'grey.100'
              }}
            >
              {file.thumbnail ? (
                <img 
                  src={file.thumbnail} 
                  alt={file.name}
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              ) : (
                getFileIcon(file.type)
              )}
            </CardMedia>
            <CardContent>
              <Typography variant="subtitle1" noWrap>
                {file.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {file.size}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FileGrid; 