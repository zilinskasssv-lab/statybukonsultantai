import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontSize: '28px', fontWeight: 600, color: '#1A1A1A', marginTop: '40px', marginBottom: '16px', lineHeight: 1.3 }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#1C3A2F', marginTop: '36px', marginBottom: '14px', lineHeight: 1.3 }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1A1A1A', marginTop: '28px', marginBottom: '12px' }}>{children}</h3>
    ),
    p: ({ children }) => (
      <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8, marginBottom: '18px' }}>{children}</p>
    ),
    ul: ({ children }) => (
      <ul style={{ marginBottom: '18px', paddingLeft: '24px', color: '#374151', lineHeight: 1.8 }}>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol style={{ marginBottom: '18px', paddingLeft: '24px', color: '#374151', lineHeight: 1.8 }}>{children}</ol>
    ),
    li: ({ children }) => (
      <li style={{ fontSize: '16px', marginBottom: '8px' }}>{children}</li>
    ),
    a: ({ children, href }) => (
      <a href={href} style={{ color: '#E8A020', textDecoration: 'underline' }}>{children}</a>
    ),
    strong: ({ children }) => (
      <strong style={{ fontWeight: 600, color: '#1A1A1A' }}>{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{ borderLeft: '3px solid #E8A020', paddingLeft: '20px', margin: '24px 0', fontStyle: 'italic', color: '#555' }}>{children}</blockquote>
    ),
    ...components,
  }
}