'use client';

export default function ErrorWrapper({error}: {error: Error}) {
    return (
        <div className="page__container">
            <h1>OOps!!! {error.message}</h1>
        </div>
    );
}