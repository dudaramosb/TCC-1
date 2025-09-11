export function Link({ to, children, ...props }) {
    const isExternal = to.startsWith("http") || to.startsWith("https");
  
    if (isExternal) {
      return (
        <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
  
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }
  