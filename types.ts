import React from 'react';

export interface PracticeDetailContent {
  what: string;
  why: string;

  how: string;
  when: string;
  where: string;
}

export interface Practice {
  id?: string;
  title: string;
  description: string;
  details?: PracticeDetailContent;
}
