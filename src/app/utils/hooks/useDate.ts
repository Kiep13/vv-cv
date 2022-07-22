import { useTranslation } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/ru';

import { DATE_FORMAT } from '../contants';

moment.locale('ru', {
  monthsShort : 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сенябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
});

export const useDate = () => {
  const {i18n} = useTranslation();

  const formatDate = (date: string): string => {
    return moment(date, DATE_FORMAT).locale(i18n.language).format(DATE_FORMAT);
  }

  return {
    formatDate
  }
}
