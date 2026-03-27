'use client';

import React, { useState, useEffect } from 'react';

interface EmailLinkProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  label?: string; // Optional label to show instead of the email address itself
}

/**
 * A secure, bot-resistant email link component.
 * It assembles the email address on the client side to prevent scrapers 
 * from harvesting it from the static HTML source.
 */
export default function EmailLink({ className, children, label, ...props }: EmailLinkProps) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Obfuscate the email parts to prevent simple string matching in source code
    const u = ['c', 'o', 'n', 't', 'a', 'c', 't'].join('');
    const d = ['i', 'j', 'e', 'p', 'a', 'r', 'k', '.', 'c', 'o', 'm'].join('');
    setEmail(`${u}@${d}`);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as unknown as React.MouseEvent<HTMLSpanElement>);
    }
  };

  return (
    <span 
      role="button"
      tabIndex={0}
      {...props}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`${className} cursor-pointer`}
      title={props.title || "Contact Us"}
    >
      {children || label || (email || 'contact [at] ijepark.com')}
    </span>
  );
}
