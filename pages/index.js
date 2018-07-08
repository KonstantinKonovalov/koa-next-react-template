import React from 'react';
import Link from 'next/link';
import '../scss/style.scss';

export default () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href='about' as='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='contacts' as='/contacts'>
                        <a>Contacts</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);
