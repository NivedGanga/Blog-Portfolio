import Quill, { Delta } from 'quill';
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';

interface EditorProps {
    formik: any
}

const Editor = forwardRef<Quill, EditorProps>(
    ({ formik }, ref) => {
        const containerRef = useRef<HTMLDivElement>(null);
        useEffect(() => {
            const container = containerRef.current;

            const editorContainer = container?.appendChild(
                container.ownerDocument.createElement('div'),
            );
            container?.classList.add('rounded-xl', 'overflow-clip', 'border', 'border-gray-400', "mt-5")
            editorContainer?.classList.add('min-h-64', 'border-none')

            if (!editorContainer) return;
            const quill = new Quill(editorContainer, {
                theme: 'snow',
            });
            quill.on(Quill.events.TEXT_CHANGE, () => {
                const content = quill.getSemanticHTML()
                const syntheticEvent = {
                    target: {
                        name: 'blogData',
                        value: content
                    }
                }
                formik.handleChange(syntheticEvent)
                const text = quill.getText()
                const textSyntheticEvent = {
                    target: {
                        name: 'description',
                        value: text
                    }
                }
                formik.handleChange(textSyntheticEvent)
            })
            if (ref && typeof ref !== "function")
                ref.current = quill;

            return () => {
                if (ref && typeof ref !== "function")
                    ref.current = null;
                if (container)
                    container.innerHTML = '';
            };
        }, [ref]);

        return <div ref={containerRef}></div>;
    },
);

Editor.displayName = 'Editor';

export default Editor;