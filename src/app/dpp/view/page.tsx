
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Question } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check, Flame, Lightbulb, ArrowLeft } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface DppResult {
  name: string;
  questions: Question[];
}

export default function DppViewPage() {
  const router = useRouter();

  useEffect(() => {
    // This page is now deprecated, redirecting to the dpp generator.
    // The new flow is /dpp -> /dpp/start -> /dpp/results
    router.replace('/dpp');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-secondary">
      <p className="text-lg">Redirecting...</p>
    </div>
  );
}
