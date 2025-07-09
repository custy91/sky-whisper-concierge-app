
import { Crown, MapPin, Clock, Users, Star, Gift, Utensils, ArrowUp, Wifi, Headphones } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Passenger {
  id: string;
  name: string;
  seat: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
  avatar: string;
  offerings: {
    type: 'upgrade' | 'meal' | 'amenity' | 'beverage';
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const Index = () => {
  const flightInfo = {
    number: "AA 1847",
    route: "LAX → JFK",
    departure: "2:30 PM",
    arrival: "10:45 PM",
    gate: "B12",
    aircraft: "Boeing 737-800"
  };

  const topPassengers: Passenger[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      seat: "3A",
      tier: "Platinum",
      avatar: "SJ",
      offerings: [
        {
          type: "upgrade",
          title: "First Class Upgrade",
          description: "Complimentary upgrade available",
          icon: <Crown className="w-4 h-4" />
        },
        {
          type: "meal",
          title: "Premium Meal Service",
          description: "Chef's special with wine pairing",
          icon: <Utensils className="w-4 h-4" />
        }
      ]
    },
    {
      id: "2",
      name: "Michael Chen",
      seat: "4B",
      tier: "Platinum",
      avatar: "MC",
      offerings: [
        {
          type: "amenity",
          title: "Premium Amenity Kit",
          description: "Luxury travel essentials",
          icon: <Gift className="w-4 h-4" />
        },
        {
          type: "beverage",
          title: "Premium Beverage Selection",
          description: "Top-shelf spirits and cocktails",
          icon: <Star className="w-4 h-4" />
        }
      ]
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      seat: "2C",
      tier: "Gold",
      avatar: "ER",
      offerings: [
        {
          type: "upgrade",
          title: "Business Class Upgrade",
          description: "Subject to availability",
          icon: <ArrowUp className="w-4 h-4" />
        },
        {
          type: "amenity",
          title: "Priority WiFi Access",
          description: "Complimentary high-speed internet",
          icon: <Wifi className="w-4 h-4" />
        }
      ]
    },
    {
      id: "4",
      name: "David Park",
      seat: "5A",
      tier: "Gold",
      avatar: "DP",
      offerings: [
        {
          type: "meal",
          title: "Special Dietary Meal",
          description: "Gluten-free gourmet option",
          icon: <Utensils className="w-4 h-4" />
        },
        {
          type: "amenity",
          title: "Noise-Canceling Headphones",
          description: "Premium audio experience",
          icon: <Headphones className="w-4 h-4" />
        }
      ]
    },
    {
      id: "5",
      name: "Lisa Thompson",
      seat: "6B",
      tier: "Silver",
      avatar: "LT",
      offerings: [
        {
          type: "beverage",
          title: "Welcome Cocktail",
          description: "Signature drink on the house",
          icon: <Star className="w-4 h-4" />
        },
        {
          type: "amenity",
          title: "Extra Blanket & Pillow",
          description: "Enhanced comfort package",
          icon: <Gift className="w-4 h-4" />
        }
      ]
    },
    {
      id: "6",
      name: "James Wilson",
      seat: "7A",
      tier: "Silver",
      avatar: "JW",
      offerings: [
        {
          type: "meal",
          title: "Priority Meal Service",
          description: "First choice of available meals",
          icon: <Utensils className="w-4 h-4" />
        }
      ]
    },
    {
      id: "7",
      name: "Anna Garcia",
      seat: "8C",
      tier: "Gold",
      avatar: "AG",
      offerings: [
        {
          type: "amenity",
          title: "Premium Seat Selection",
          description: "Exit row or extra legroom",
          icon: <ArrowUp className="w-4 h-4" />
        }
      ]
    },
    {
      id: "8",
      name: "Robert Lee",
      seat: "9B",
      tier: "Platinum",
      avatar: "RL",
      offerings: [
        {
          type: "upgrade",
          title: "Lounge Access",
          description: "Post-flight lounge invitation",
          icon: <Crown className="w-4 h-4" />
        }
      ]
    },
    {
      id: "9",
      name: "Maria Santos",
      seat: "10A",
      tier: "Silver",
      avatar: "MS",
      offerings: [
        {
          type: "beverage",
          title: "Premium Coffee Service",
          description: "Artisan coffee selection",
          icon: <Star className="w-4 h-4" />
        }
      ]
    },
    {
      id: "10",
      name: "Tom Anderson",
      seat: "11C",
      tier: "Gold",
      avatar: "TA",
      offerings: [
        {
          type: "amenity",
          title: "Reading Light & Tablet Stand",
          description: "Enhanced workspace setup",
          icon: <Gift className="w-4 h-4" />
        }
      ]
    }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platinum': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Gold': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Silver': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getOfferingColor = (type: string) => {
    switch (type) {
      case 'upgrade': return 'bg-blue-50 border-blue-200';
      case 'meal': return 'bg-green-50 border-green-200';
      case 'amenity': return 'bg-orange-50 border-orange-200';
      case 'beverage': return 'bg-purple-50 border-purple-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Cabin Crew Assistant</h1>
          <p className="text-gray-600">Premium Passenger Service</p>
        </div>

        {/* Flight Information */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5" />
              Flight {flightInfo.number}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="font-medium">{flightInfo.route}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-600" />
                <span>{flightInfo.departure} - {flightInfo.arrival}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Gate {flightInfo.gate}</span>
              </div>
              <div className="text-gray-600 text-xs">
                {flightInfo.aircraft}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Passengers */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-5 h-5 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Top 10 Passengers</h2>
          </div>

          {topPassengers.map((passenger, index) => (
            <Card key={passenger.id} className="bg-white shadow-md border-0 overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {passenger.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{passenger.name}</h3>
                      <Badge variant="outline" className={`text-xs ${getTierColor(passenger.tier)}`}>
                        {passenger.tier}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">Seat {passenger.seat} • #{index + 1}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {passenger.offerings.map((offering, offerIndex) => (
                    <div 
                      key={offerIndex} 
                      className={`p-3 rounded-lg border ${getOfferingColor(offering.type)}`}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        {offering.icon}
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-gray-900">{offering.title}</h4>
                          <p className="text-xs text-gray-600">{offering.description}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs py-2"
                      >
                        Offer to {passenger.name.split(' ')[0]}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-8 pb-4">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Index;
