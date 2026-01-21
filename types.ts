// Fix: Added missing React import to resolve namespace issues for React.ReactNode
import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}