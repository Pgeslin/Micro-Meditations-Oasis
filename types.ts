import React from 'react';

export interface Practice {
  id?: string;
  title: string;
  description: string;
  icon?: string;
  details?: {
    explanation: string;
  };
}
