Title: I built a Sentinel AI system using n8n and ChatGPT with ESP8266

Introduction: 

Sentinel AI is a device with RGB lights and a speaker that sits on my desk and connects to an instance of n8n server, 
it saves me from missing important meetings and emails.
It protects my home when I'm away. Thanks to AI technology that made this possible.


Why Sentinel AI?

AI is the future and it's not limited to phone and computers, it's coming to more and more devices.
Sentinel AI utilises IoT + AI technology to assist me in my daily life.

When most people think of alarms, they imagine a loud ringing clock or a simple door sensor. 
But what if one divice could monitor my home using CCTV camera. It run AI analytics and trigger an alarm if intrusion is detected.
send telegram message with the live footage of the intruder. ring the alarm and flash the lights in multiple locations.

what if one device could handle my work urgent notifications, calendar reminders, and even home security — all in one? That’s exactly what I set out to build with the Sentinel AI System.
Sentinel is a smart notification and security system powered by a mix of simple hardware and automation tools: WLED for lighting effects, a DFPlayer Mini for sound playback, and n8n as the automation brain.
Together, they create a flexible platform that transforms routine alerts into immersive, intelligent experiences.

<!-- Here I would like to have an image of the sentinel device -->

The Core Setup

WLED: Handles dynamic lighting effects (flashing, pulsing, or ambient cues).
DFPlayer Mini: Plays different audio tones or music depending on the type of alert.
n8n: Orchestrates workflows, connects to services like Gmail and Google Calendar, and processes triggers from external apps like CCTV cameras.
With this combination, Sentinel becomes more than just a smart alarm. It’s a multi-purpose notification and security hub.



Use Cases
1. Smart Office Notifications for work

In today’s world, we are bombarded with notifications on screens and devices. The problem? They’re easy to miss, especially if you’re deep in work or away from your phone. I wanted a system that would cut through the noise through AI. Use lights and sound in the physical world to make notifications impossible to ignore.
Emails are the lifeblood of modern work, but not all of them deserve immediate attention. Sentinel helps me prioritize:

Urgent emails: n8n detects high-priority messages in Gmail → Sentinel flashes bright lights and plays urgent music.
Non-urgent emails: It plays a softer chime and a gentle light effect, so I know something arrived but don’t get distracted unnecessarily.
No more missed critical messages buried in inbox clutter.

2. Smart Calendar Notifications for work or personal life

Meetings are easy to forget in the middle of deep work. With Google Calendar wired into n8n:

When a meeting starts → Sentinel flashes the lights blue and plays a distinct notification tone.

The effect is subtle but effective, making sure I never miss another meeting without relying solely on desktop pop-ups.

3. Advanced Home Security System

This is where Sentinel really shines. I connected my CCTV camera to a custom Node.js bridge that uses ONVIF to listen for motion or person detection events. When the bridge detects activity:

It sends a webhook to n8n.

n8n triggers Sentinel → flashing red/blue lights and ringing the alarm.

The effect isn’t just informative — it’s intimidating, designed to scare off intruders.

Even better, this setup can be extended to multiple locations. For example:

A shopkeeper could place Sentinel in their home.

If the shop’s CCTV detects motion at night → Sentinel at home rings the alarm, instantly alerting them.

Future extensions include capturing snapshots from the camera and sending them via Telegram notifications, so you see exactly what triggered the alarm.



Challenges Along the Way

DFPlayer quirks: Getting consistent sound playback required careful debugging of connections and SD card formatting.

WLED integration: Timing effects to sync light with sound took some experimenting.

Workflow design in n8n: Filtering urgent vs. non-urgent emails and handling multiple services without overlap was a balancing act.

But solving these challenges made Sentinel more robust and reliable.



What’s Next for Sentinel

This project is just the beginning. Here are some exciting extensions on the roadmap:

Voice alerts: Personalized spoken notifications (e.g., “Meeting in 5 minutes”).

Mood-based light effects: Morning vs. evening alerts with different tones.

Deeper IoT integrations: Connect with smart locks, motion sensors, or even coffee machines.

AI-powered prioritization: Let AI decide which notifications truly matter.

Conclusion

The Sentinel AI System proves that with a few inexpensive components and the power of automation, you can build a multi-purpose alert and security system that’s smarter than any off-the-shelf alarm.

Whether it’s saving you from missing an urgent email, reminding you of a meeting, or protecting your home, Sentinel turns ordinary hardware into an intelligent assistant that lives in the physical world.

It’s not just an alarm.
It’s your Sentinel.