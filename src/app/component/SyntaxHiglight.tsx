import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type Props = {
    message: string
}

export default function SyntaxHiglight({ message }: Props) {

    const listLangguage = ['javascript', 'python', 'c++', 'c#', 'c', 'go', 'typescript', 'java', 'php']
    const messageSameWithLangguage = () => {
        return listLangguage.map((lang) => message.includes(lang))
    }

    const syntaxLangguage = (message: string) => {
        const matches = message.match(/```([\s\S]+?)```/);
        return matches ? matches[1] : null;
    };

    return (
        <>
            {syntaxLangguage(message) && <>
                <SyntaxHighlighter language={`${messageSameWithLangguage}`} style={atomOneDark} >
                    {syntaxLangguage(message)}
                </SyntaxHighlighter>
            </>}
            {message}
        </>
    )
}
