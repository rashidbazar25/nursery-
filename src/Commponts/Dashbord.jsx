import React, { useState } from 'react';
import {
  Grid, Card, CardMedia, CardContent, Typography, Button,
  TextField, Box
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addSubject, deleteSubject } from '../store/SubjectsSlice';

const Dashbord = () => {
  const { t } = useTranslation();
  const subjects = useSelector((state) => state.Subjects);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    address: '',
    paragraph: '',
    photoUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const { address, paragraph, photoUrl } = formData;
    if (address && paragraph && photoUrl) {
      dispatch(addSubject({ id: Date.now(), ...formData }));
      setFormData({ address: '', paragraph: '', photoUrl: '' });
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteSubject(id));
  };

  return (
    <Box sx={{ marginTop: '200px', padding: '30px' }}>
      {/* العنوان */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#2c3e50',
          fontFamily: 'Tajawal',
          mb: 4,
        }}
      >
        {t('dashboard.dashboard')}
      </Typography>

      {/* نموذج الإضافة */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'center',
          mb: 4,
        }}
      >
        <TextField
          name="address"
          label={t('dashboard.address')}
          variant="outlined"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          name="paragraph"
          label={t('dashboard.paragraph')}
          variant="outlined"
          value={formData.paragraph}
          onChange={handleChange}
        />
        <TextField
          name="photoUrl"
          label={t('dashboard.photo_url')}
          variant="outlined"
          value={formData.photoUrl}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          {t('dashboard.add')}
        </Button>
      </Box>

      {/* الكروت */}
      <Grid container spacing={3}>
        {subjects.map((subject) => (
          <Grid key={subject.id} item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={subject.photoUrl}
                alt="card"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ minHeight: '48px', mb: 1, color: 'black' }}
                >
                  {t(subject.address, { defaultValue: subject.address })}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ minHeight: '64px' }}
                >
                  {t(subject.paragraph, { defaultValue: subject.paragraph })}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(subject.id)}
                  >
                    {t('dashboard.delete')}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashbord;
