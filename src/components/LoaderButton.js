import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './LoaderButton.css';

export default function LoaderButton({
  isLoading,
  className = '',
  disabled = false,
  ...props
}) {
  const { children } = props;
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
      {children}
    </Button>
  );
}
