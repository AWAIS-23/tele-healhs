"use client";
import { SectionHeader } from "@/components";
export function ConnectedDevices({ partnerName = "PointClickCare" }) {
    const devices = [
        {
            device: "Blood Pressure Cuff",
            connectivity: "Cellular-connected",
            data: "Systolic, diastolic, pulse, irregular heartbeat flag",
        },
        {
            device: "Weight Scale",
            connectivity: "Cellular-connected",
            data: "Weight, BMI, trend alerts for fluid retention",
        },
        {
            device: "Pulse Oximeter",
            connectivity: "Cellular-connected",
            data: "SpO2, pulse rate, perfusion index",
        },
        {
            device: "Blood Glucose Meter",
            connectivity: "Cellular-connected",
            data: "Glucose level, pre/post meal tagging",
        },
        {
            device: "Continuous Glucose Monitor",
            connectivity: "Bluetooth/cloud",
            data: "288 readings/day, trend arrows, time-in-range",
        },
        {
            device: "Thermometer",
            connectivity: "Cellular-connected",
            data: "Temperature, fever detection alerts",
        },
        {
            device: "Contactless Monitor",
            connectivity: "UWB radar",
            data: "Heart rate, respiratory rate, sleep, presence",
        },
        {
            device: "Sleep Tracker",
            connectivity: "Under-mattress",
            data: "Sleep duration, efficiency, restlessness",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">

                <SectionHeader
                    align="center"
                    className="mb-6"
                    badge={
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                            <span className="text-sm font-medium text-blue-800">Connected Devices</span>
                        </div>
                    }
                    title={<>
                        Every reading, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">charted automatically.</span>
                    </>}
                    description={
                        `This isn't a one-way data dump. ${partnerName} shares clinical context with tele Health to inform monitoring protocols, and tele Health writes vitals, alerts, and billing documentation back — so caregivers never leave the EHR.`
                    }
                    titleClassName="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                    titleColor="text-gray-900"
                    descClassName=" text-gray-600 text-lg leading-relaxed mb-8"
                    descColor="text-gray-600"
                />


                {/* Device Table */}
                <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-lg max-w-5xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Device
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Connectivity
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Data Synced to {partnerName}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {devices.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                                            }`}
                                    >
                                        <td className="px-6 py-4 font-semibold text-gray-900">
                                            {item.device}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-100 border border-blue-200 text-blue-700 px-3 py-1 rounded-full">
                                                {item.connectivity}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 font-medium">
                                            {item.data}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
