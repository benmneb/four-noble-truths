import { useParams } from 'react-router-dom';
import * as truths from '../data';

import { useStore } from '../store';
import { DefaultQuote, ExplanationDetails } from './index';

export default function ExplanationContents() {
  const params = useParams();

  const hoverTruth = useStore((state) => state.hoverTruth);

  const whatToShow = hoverTruth ? hoverTruth : params?.truth;

  if (truths?.[whatToShow])
    return <ExplanationDetails source={truths[whatToShow]} />;

  return <DefaultQuote />;
}
