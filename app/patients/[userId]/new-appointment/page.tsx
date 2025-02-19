import AppointmentForm from "@/components/forms/AppointmentForm"
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image"


export default async function NewAppointment({ params }: SearchParamProps) {
    const { userId } = await params;
    const patient = await getPatient(userId)
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit"
                    />
                    <AppointmentForm
                        patientId={patient?.$id}
                        userId={userId}
                        type="create"
                    />
                    <p className="copyright py-8">
                        © 2025 CarePulse
                    </p>
                </div>
            </section >
            <Image
                src="/assets/images/appointment-img.png"
                height={1000}
                width={1000}
                alt="appointment"
                className="side-img max-w-[40%] bg-bottom"
            />
        </div >
    )
}