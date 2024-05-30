"use client"

import { useState, useTransition } from "react";
import Dropzone from 'react-dropzone';
import { FaMousePointer, FaImage } from 'react-icons/fa';
import { LuLoader } from "react-icons/lu";
import { Progress } from '@/components/ui/progress'
import { useUploadThing } from "@/lib/uploadthing";

import { toast, useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const page = () => {

    const { toast } = useToast()
    const [uploadProgress, setUploadProgress] = useState<number>(0)
    const router = useRouter()

    const { startUpload, isUploading } = useUploadThing('imageUploader', {
        onClientUploadComplete: ([data]) => {
            const configId = data.serverData.configId
            startTransition(() => {
                router.push(`/configure/design?id=${configId}`)
            })
        },
        onUploadProgress(p) {
            setUploadProgress(p)
        },
    });

    const onDropRejected = (rejectedFiles: any) => {
        const [file] = rejectedFiles
        console.log(file);

        toast({
            title: `${file.file.type} type is not supported.`,
            description: "Please choose a PNG, JPG, or JPEG image instead.",
            variant: "destructive"
        })
    }

    const onDropAccepted = (acceptedFiles: File[]) => {
        startUpload(acceptedFiles, { configId: undefined })

    }

    const [isPending, startTransition] = useTransition();

    return (
        <div
            className={
                `relative h-96 flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center`
            }>
            <div className='relative flex flex-1 flex-col items-center justify-center w-full'>
                <Dropzone
                    onDropRejected={onDropRejected}
                    onDropAccepted={onDropAccepted}
                    accept={{
                        'image/png': ['.png'],
                        'image/jpeg': ['.jpeg'],
                        'image/jpg': ['.jpg'],
                    }}
                // onDragEnter={() => setIsDragOver(true)}
                // onDragLeave={() => setIsDragOver(false)}
                >
                    {
                        ({ getRootProps, getInputProps, isDragActive }) => (
                            <section>
                                <div className='h-full w-full flex-1 flex flex-col items-center justify-center'
                                    {...getRootProps()}>
                                    <input {...getInputProps()} />

                                    {/*  */}
                                    {isDragActive ? (
                                        <FaMousePointer className='h-6 w-6 text-zinc-500 mb-2' />
                                    ) : isUploading || isPending ? (
                                        <LuLoader className='animate-spin h-6 w-6 text-zinc-500 mb-2' />
                                    ) : (
                                        <FaImage className='h-6 w-6 text-zinc-500 mb-2' />
                                    )}

                                    {/*  */}
                                    <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                                        {isUploading ? (
                                            <div className='flex flex-col items-center'>
                                                <p>Uploading...</p>
                                                <Progress
                                                    value={uploadProgress}
                                                    className='mt-2 w-40 h-2 bg-gray-300'
                                                />
                                            </div>
                                        ) : isPending ? (
                                            <div className='flex flex-col items-center'>
                                                <p>Redirecting, please wait...</p>
                                            </div>
                                        ) : isDragActive ? (
                                            <p>
                                                <span className='font-semibold'>Drop file</span> to upload
                                            </p>
                                        ) : (
                                            <p>
                                                <span className='font-semibold'>Click to upload</span> or
                                                drag and drop
                                            </p>
                                        )}
                                    </div>

                                    {isPending ? null : (
                                        <p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>
                                    )}

                                </div>
                            </section>
                        )
                    }
                </Dropzone>
            </div>
        </div>
    )
}

export default page
