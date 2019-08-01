import React, { useEffect, useState, useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';
import { ip } from '~/services/api';

export default function Appointment({ data, onCancel }) {
  const [appointment, setAppointment] = useState(data);
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);
  useEffect(() => {
    setAppointment({
      ...data,
      provider: {
        ...data.provider,
        avatar: {
          ...data.provider.avatar,
          url: `http://${ip}:3333/files/${data.provider.avatar.path}`,
        },
      },
    });
  }, [data]);

  return (
    <Container past={appointment.past}>
      <Left>
        <Avatar
          source={{
            uri: appointment.provider.avatar
              ? appointment.provider.avatar.url
              : `https://api.adorable.io/avatar/50/${appointment.provider.name}.png`,
          }}
        />
        <Info>
          <Name>{appointment.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {appointment.cancelable && !appointment.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
