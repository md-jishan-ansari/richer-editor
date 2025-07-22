import { cn } from "@/lib/utils"

const RicherContent = ({ content, className = '' }: { content: string, className?: string }) => {

    return (
        <div className={cn(`prose dark:prose-invert
        prose-sm
        lg:prose-lg
        sm:prose-base //to make font medium
        prose-p:mt-0
        prose-p:mb-1
        leading-6

        prose-blockquote:bg-muted/50
        prose-blockquote:p-2
        prose-blockquote:px-6
        prose-blockquote:border-border
        prose-blockquote:not-italic
        prose-blockquote:rounded-r-lg
        [&_blockquote>p]:after:content-none
        [&_blockquote>p]:before:content-none

        prose-li:marker:text-muted-foreground
        w-full
        max-w-full`, className)}>
            <div
                className="max-w-none"
                dangerouslySetInnerHTML={{ __html: content || "" }}
            />
        </div>
    )
}

export default RicherContent
