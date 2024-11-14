import { useParams } from 'react-router-dom';
import * as truths from '../data';

import { useParamsData } from '../utils';
import { DefaultQuote, ErrorPage, ExplanationDetails } from './index';

export default function ExplanationContents() {
  const { truth: confirmedTruth } = useParamsData();
  const { truth: paramTruth } = useParams();

  if (truths?.[confirmedTruth])
    return <ExplanationDetails source={truths[confirmedTruth]} />;

  if (paramTruth && !confirmedTruth) return <ErrorPage />;

  return <DefaultQuote />;
}
