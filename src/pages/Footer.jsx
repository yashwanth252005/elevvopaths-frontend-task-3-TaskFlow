import React from 'react';

export default function Footer() {
    return (
        <footer style={{ background: '#051322', color: '#fff', padding: '2rem 0', textAlign: 'center', marginTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <strong>Task Flow</strong><br />
                    123 Productivity Lane, Suite 456<br />
                    Bangalore, Karnataka, India<br />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <div>
                        <span>Contact us: </span>
                        <a href="mailto:support@elevvo.com" style={{ color: '#fff', textDecoration: 'underline' }}>support@taskflow.com</a> | <a href="tel:+911234567890" style={{ color: '#fff', textDecoration: 'underline' }}>+91 12345 67890</a>
                    </div>
                    <div>
                        <span>Follow us: </span>
                        <a href="https://www.facebook.com/taskflow" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>Facebook</a> |
                        <a href="https://twitter.com/taskflow" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>Twitter</a> |
                        <a href="https://www.instagram.com/taskflow" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>Instagram</a>
                    </div>
                </div>
                <div>
                    &copy; {new Date().getFullYear()} Task Flow. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
