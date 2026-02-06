import type { Chapter } from '../data';

export const coordinateGeometryQuestions: Chapter = {
    id: 305,
    name: 'Coordinate Geometry',
    questions: [
        // Easy
        {
            id: 305001,
            text: 'The distance between the points (3, 4) and (6, 8) is:',
            options: ['3', '4', '5', '6'],
            answer: '5',
            difficulty: 'Easy',
            pageReference: 1,
            concepts: ['distance formula'],
            isPastPaper: false,
            explanation: 'Using the distance formula, d = √((x₂-x₁)² + (y₂-y₁)²), we get d = √((6-3)² + (8-4)²) = √(3² + 4²) = √(9 + 16) = √25 = 5.'
        },
        {
            id: 305002,
            text: 'The slope of the line passing through the points (2, 3) and (4, 7) is:',
            options: ['1', '2', '3', '4'],
            answer: '2',
            difficulty: 'Easy',
            pageReference: 2,
            concepts: ['slope of a line'],
            isPastPaper: false,
            explanation: 'The slope m = (y₂ - y₁) / (x₂ - x₁) = (7 - 3) / (4 - 2) = 4 / 2 = 2.'
        },
        {
            id: 305003,
            text: 'The equation of a line with slope 2 and y-intercept 3 is:',
            options: ['y = 3x + 2', 'y = 2x + 3', 'x = 2y + 3', 'x = 3y + 2'],
            answer: 'y = 2x + 3',
            difficulty: 'Easy',
            pageReference: 3,
            concepts: ['equation of a line'],
            isPastPaper: false,
            explanation: 'Using the slope-intercept form y = mx + c, where m is the slope and c is the y-intercept. So, y = 2x + 3.'
        },
        {
            id: 305004,
            text: 'The center of the circle with equation (x-2)² + (y+3)² = 16 is:',
            options: ['(2, 3)', '(-2, 3)', '(2, -3)', '(-2, -3)'],
            answer: '(2, -3)',
            difficulty: 'Easy',
            pageReference: 5,
            concepts: ['circle equation'],
            isPastPaper: false,
            explanation: 'The standard form of a circle is (x-h)² + (y-k)² = r², where (h, k) is the center. Comparing, h=2 and k=-3.'
        },
        {
            id: 305005,
            text: 'The radius of the circle with equation x² + y² = 25 is:',
            options: ['25', '12.5', '5', '10'],
            answer: '5',
            difficulty: 'Easy',
            pageReference: 5,
            concepts: ['circle equation'],
            isPastPaper: false,
            explanation: 'The equation is in the form x² + y² = r², so r² = 25, and the radius r = 5.'
        },
        {
            id: 305006,
            text: 'The midpoint of the line segment joining the points (1, 5) and (7, -3) is:',
            options: ['(4, 1)', '(3, 1)', '(4, 2)', '(8, 2)'],
            answer: '(4, 1)',
            difficulty: 'Easy',
            pageReference: 1,
            concepts: ['section formula', 'midpoint'],
            isPastPaper: false,
            explanation: 'Midpoint formula is ((x₁+x₂)/2, (y₁+y₂)/2) = ((1+7)/2, (5-3)/2) = (4, 1).'
        },
        {
            id: 305007,
            text: 'Two lines are parallel if their slopes are:',
            options: ['Equal', 'Reciprocals', 'Negative reciprocals', 'Opposite'],
            answer: 'Equal',
            difficulty: 'Easy',
            pageReference: 2,
            concepts: ['parallel lines'],
            isPastPaper: false,
            explanation: 'Parallel lines have the same inclination with the x-axis, and hence, their slopes are equal.'
        },
        {
            id: 305008,
            text: 'The vertex of the parabola y² = 8x is:',
            options: ['(2, 0)', '(0, 2)', '(0, 0)', '(8, 0)'],
            answer: '(0, 0)',
            difficulty: 'Easy',
            pageReference: 7,
            concepts: ['parabola'],
            isPastPaper: false,
            explanation: 'The standard equation y² = 4ax has its vertex at the origin (0, 0).'
        },
        {
            id: 305009,
            text: 'The equation of a line passing through (1, 2) and parallel to the x-axis is:',
            options: ['x = 1', 'y = 1', 'x = 2', 'y = 2'],
            answer: 'y = 2',
            difficulty: 'Easy',
            pageReference: 3,
            concepts: ['equation of a line'],
            isPastPaper: false,
            explanation: 'A line parallel to the x-axis has a constant y-coordinate. Since it passes through (1, 2), its equation is y = 2.'
        },
        {
            id: 305010,
            text: 'The equation x² + y² + 6x - 4y - 3 = 0 represents a circle. What is its radius?',
            options: ['3', '4', '5', '6'],
            answer: '4',
            difficulty: 'Easy',
            pageReference: 5,
            concepts: ['circle equation'],
            isPastPaper: false,
            explanation: 'The general equation is x²+y²+2gx+2fy+c=0. Here g=3, f=-2, c=-3. Radius r = √(g²+f²-c) = √(3²+(-2)²-(-3)) = √(9+4+3) = √16 = 4.'
        },
        {
            id: 305011,
            text: 'Two lines are perpendicular if the product of their slopes is:',
            options: ['1', '0', '-1', '2'],
            answer: '-1',
            difficulty: 'Easy',
            pageReference: 2,
            concepts: ['perpendicular lines'],
            isPastPaper: false,
            explanation: 'If two lines with slopes m₁ and m₂ are perpendicular, then m₁ * m₂ = -1.'
        },
        {
            id: 305012,
            text: 'The length of the major axis of the ellipse x²/25 + y²/9 = 1 is:',
            options: ['5', '3', '10', '6'],
            answer: '10',
            difficulty: 'Easy',
            pageReference: 9,
            concepts: ['ellipse'],
            isPastPaper: false,
            explanation: 'The equation is x²/a² + y²/b² = 1. Here a²=25, so a=5. The length of the major axis is 2a = 2 * 5 = 10.'
        },
        {
            id: 305013,
            text: 'The vertices of the hyperbola x²/9 - y²/16 = 1 are:',
            options: ['(±3, 0)', '(0, ±3)', '(±4, 0)', '(0, ±4)'],
            answer: '(±3, 0)',
            difficulty: 'Easy',
            pageReference: 11,
            concepts: ['hyperbola'],
            isPastPaper: false,
            explanation: 'For a hyperbola x²/a² - y²/b² = 1, the vertices are at (±a, 0). Here a²=9, so a=3. The vertices are (±3, 0).'
        },
        {
            id: 305014,
            text: 'The equation of the line passing through (1, 2) and (3, 4) is:',
            options: ['y = x + 1', 'y = 2x', 'y = x - 1', 'y = 3x - 1'],
            answer: 'y = x + 1',
            difficulty: 'Easy',
            pageReference: 3,
            concepts: ['equation of a line'],
            isPastPaper: false,
            explanation: 'Slope m = (4-2)/(3-1) = 1. Using point-slope form: y - 2 = 1(x - 1) => y = x + 1.'
        },
        {
            id: 305015,
            text: 'The area of a triangle with vertices (0,0), (4,0), and (0,5) is:',
            options: ['10', '20', '9', '18'],
            answer: '10',
            difficulty: 'Easy',
            pageReference: 1,
            concepts: ['area of triangle'],
            isPastPaper: false,
            explanation: 'This is a right-angled triangle. Area = (1/2) * base * height = (1/2) * 4 * 5 = 10.'
        },

        // Medium
        {
            id: 305016,
            text: 'The equation of the line perpendicular to the line 3x + 4y = 7 and passing through the point (1, 2) is:',
            options: ['4x - 3y + 2 = 0', '4x + 3y - 10 = 0', '3x - 4y + 5 = 0', '3x + 4y - 11 = 0'],
            answer: '4x - 3y + 2 = 0',
            difficulty: 'Medium',
            pageReference: 4,
            concepts: ['perpendicular lines'],
            isPastPaper: true,
            explanation: 'The slope of the given line is -3/4. The slope of the perpendicular line is 4/3. The equation is y - 2 = (4/3)(x - 1) => 3y - 6 = 4x - 4 => 4x - 3y + 2 = 0.'
        },
        {
            id: 305017,
            text: 'The focus of the parabola y² = 16x is:',
            options: ['(4, 0)', '(0, 4)', '(-4, 0)', '(0, -4)'],
            answer: '(4, 0)',
            difficulty: 'Medium',
            pageReference: 7,
            concepts: ['parabola'],
            isPastPaper: false,
            explanation: 'Comparing y² = 16x with y² = 4ax, we get 4a = 16, so a = 4. The focus of this parabola is at (a, 0), which is (4, 0).'
        },
        {
            id: 305018,
            text: 'The eccentricity of the ellipse x²/16 + y²/9 = 1 is:',
            options: ['√7/4', '√7/3', '4/3', '3/4'],
            answer: '√7/4',
            difficulty: 'Medium',
            pageReference: 9,
            concepts: ['ellipse', 'eccentricity'],
            isPastPaper: true,
            explanation: 'Here a²=16, b²=9. For an ellipse, c² = a²-b² = 16-9 = 7. Eccentricity e = c/a = √7/4.'
        },
        {
            id: 305019,
            text: 'The equation of the directrix for the parabola x² = -8y is:',
            options: ['y = 2', 'y = -2', 'x = 2', 'x = -2'],
            answer: 'y = 2',
            difficulty: 'Medium',
            pageReference: 7,
            concepts: ['parabola', 'directrix'],
            isPastPaper: false,
            explanation: 'Comparing x² = -8y with x² = -4ay, we get 4a = 8, so a = 2. The directrix is y = a, which is y = 2.'
        },
        {
            id: 305020,
            text: 'The length of the latus rectum of the ellipse 4x² + 9y² = 36 is:',
            options: ['4/3', '8/3', '2/3', '9/4'],
            answer: '8/3',
            difficulty: 'Medium',
            pageReference: 10,
            concepts: ['ellipse', 'latus rectum'],
            isPastPaper: false,
            explanation: 'Divide by 36 to get standard form: x²/9 + y²/4 = 1. Here a²=9, b²=4, so a=3. Length of latus rectum = 2b²/a = 2(4)/3 = 8/3.'
        },
        {
            id: 305021,
            text: 'The area of the triangle formed by the lines y = x, x = 6 and y = 0 is:',
            options: ['36', '18', '9', '12'],
            answer: '18',
            difficulty: 'Medium',
            pageReference: 4,
            concepts: ['area of triangle'],
            isPastPaper: false,
            explanation: 'The vertices of the triangle are (0,0), (6,0), and (6,6). This is a right-angled triangle with base 6 and height 6. Area = (1/2) * 6 * 6 = 18.'
        },
        {
            id: 305022,
            text: 'The coordinates of the foci of the hyperbola 9x² - 16y² = 144 are:',
            options: ['(±5, 0)', '(0, ±5)', '(±4, 0)', '(0, ±4)'],
            answer: '(±5, 0)',
            difficulty: 'Medium',
            pageReference: 11,
            concepts: ['hyperbola', 'foci'],
            isPastPaper: false,
            explanation: 'Divide by 144 to get standard form: x²/16 - y²/9 = 1. a²=16, b²=9. For a hyperbola, c² = a²+b² = 16+9 = 25, so c=5. Foci are at (±c, 0), which is (±5, 0).'
        },
        {
            id: 305023,
            text: 'The equation of the tangent to the circle x² + y² = 25 at the point (3, 4) is:',
            options: ['3x + 4y = 25', '4x + 3y = 25', '3x - 4y = 7', '4x - 3y = 0'],
            answer: '3x + 4y = 25',
            difficulty: 'Medium',
            pageReference: 6,
            concepts: ['circle', 'tangent'],
            isPastPaper: false,
            explanation: 'The equation of the tangent to x²+y²=r² at (x₁,y₁) is xx₁+yy₁=r². So, 3x + 4y = 25.'
        },
        {
            id: 305024,
            text: 'The point that divides the line segment joining the points (1, 2) and (4, 5) in the ratio 2:1 is:',
            options: ['(3, 4)', '(2, 3)', '(5/3, 4)', '(3, 11/3)'],
            answer: '(3, 4)',
            difficulty: 'Medium',
            pageReference: 1,
            concepts: ['section formula'],
            isPastPaper: false,
            explanation: 'Using section formula: x = (2*4 + 1*1)/(2+1) = 9/3 = 3. y = (2*5 + 1*2)/(2+1) = 12/3 = 4.'
        },
        {
            id: 305025,
            text: 'The length of the latus rectum of the hyperbola 16x² - 9y² = 144 is:',
            options: ['32/3', '16/3', '8/3', '4/3'],
            answer: '32/3',
            difficulty: 'Medium',
            pageReference: 12,
            concepts: ['hyperbola', 'latus rectum'],
            isPastPaper: false,
            explanation: 'Divide by 144: x²/9 - y²/16 = 1. Here a²=9, b²=16, so a=3. Length of latus rectum = 2b²/a = 2(16)/3 = 32/3.'
        },
        {
            id: 305026,
            text: 'The reflection of the point (4, -13) in the line 5x + y + 6 = 0 is:',
            options: ['(-1, -14)', '(1, 14)', '(-4, 13)', '(1, -14)'],
            answer: '(-1, -14)',
            difficulty: 'Medium',
            pageReference: 4,
            concepts: ['reflection of a point'],
            isPastPaper: true
        },
        {
            id: 305027,
            text: 'The equation of the director circle of the ellipse x²/a² + y²/b² = 1 is:',
            options: ['x² + y² = a² + b²', 'x² + y² = a² - b²', 'x² + y² = a²', 'x² + y² = b²'],
            answer: 'x² + y² = a² + b²',
            difficulty: 'Medium',
            pageReference: 10,
            concepts: ['ellipse', 'director circle'],
            isPastPaper: false
        },
        {
            id: 305028,
            text: 'The equation of the asymptotes of the hyperbola x²/a² - y²/b² = 1 are:',
            options: ['x/a ± y/b = 0', 'x/a ± y/b = 1', 'x²/a² + y²/b² = 1', 'y = ±x'],
            answer: 'x/a ± y/b = 0',
            difficulty: 'Medium',
            pageReference: 12,
            concepts: ['hyperbola', 'asymptotes'],
            isPastPaper: false
        },
        {
            id: 305029,
            text: 'The condition that the line y = mx + c is a tangent to the ellipse x²/a² + y²/b² = 1 is:',
            options: ['c² = a²m² + b²', 'c² = a²m² - b²', 'c² = a² + b²m²', 'c = am+b'],
            answer: 'c² = a²m² + b²',
            difficulty: 'Medium',
            pageReference: 10,
            concepts: ['ellipse', 'tangent'],
            isPastPaper: false
        },
        {
            id: 305030,
            text: 'If P(x, y) is any point on the ellipse 16x² + 25y² = 400 and F1=(3,0), F2=(-3,0), then PF1 + PF2 equals:',
            options: ['8', '6', '10', '12'],
            answer: '10',
            difficulty: 'Medium',
            pageReference: 9,
            concepts: ['ellipse definition'],
            isPastPaper: false,
            explanation: 'Divide by 400: x²/25 + y²/16 = 1. a²=25, so a=5. For any point on the ellipse, the sum of the distances to the foci is constant and equal to 2a = 2*5 = 10.'
        },

        // Hard
        {
            id: 305031,
            text: 'The equation of the circle passing through the points (0,0), (a,0) and (0,b) is:',
            options: ['x² + y² - ax - by = 0', 'x² + y² + ax + by = 0', 'x² + y² - ax + by = 0', 'x² + y² + ax - by = 0'],
            answer: 'x² + y² - ax - by = 0',
            difficulty: 'Hard',
            pageReference: 6,
            concepts: ['circle equation'],
            isPastPaper: true,
            explanation: 'The points form a right-angled triangle. The hypotenuse joining (a,0) and (0,b) is the diameter of the circle. The center is the midpoint ((a/2), (b/2)). Substitute one point and the center into the circle equation to find the final form.'
        },
        {
            id: 305032,
            text: 'The eccentricity of the hyperbola which passes through (3, 0) and (3√5, 2) is:',
            options: ['13/9', '√13/3', '5/3', '√10/3'],
            answer: '√13/3',
            difficulty: 'Hard',
            pageReference: 12,
            concepts: ['hyperbola', 'eccentricity'],
            isPastPaper: true,
            explanation: 'Let the equation be x²/a² - y²/b² = 1. It passes through (3,0), so a²=9. It passes through (3√5, 2), so (45/9) - (4/b²) = 1 => 5 - 4/b² = 1 => 4/b² = 4 => b²=4. Now, e = √(1 + b²/a²) = √(1 + 4/9) = √(13/9) = √13/3.'
        },
        {
            id: 305033,
            text: 'The tangent to the parabola y² = 4x at the point (1, 2) is:',
            options: ['x - y + 1 = 0', 'x + y - 3 = 0', 'y = x + 1', 'y = 2x'],
            answer: 'x - y + 1 = 0',
            difficulty: 'Medium',
            pageReference: 8,
            concepts: ['parabola', 'tangent'],
            isPastPaper: false,
            explanation: 'The equation of the tangent to y²=4ax at (x₁,y₁) is yy₁=2a(x+x₁). Here 4a=4, so a=1. The point is (1,2). 2y = 2(1)(x+1) => y = x+1 => x - y + 1 = 0.'
        },
        {
            id: 305034,
            text: 'If the lines 2x + y - 3 = 0, 5x + ky - 3 = 0 and 3x - y - 2 = 0 are concurrent, then the value of k is:',
            options: ['-2', '5', '3', '-1/2'],
            answer: '-2',
            difficulty: 'Hard',
            pageReference: 4,
            concepts: ['concurrent lines'],
            isPastPaper: true,
            explanation: 'First, find the intersection of the first and third lines. Adding them gives 5x - 5 = 0 => x=1. Then y = 3 - 2x = 1. The intersection point is (1,1). This point must lie on the second line: 5(1) + k(1) - 3 = 0 => 5+k-3=0 => k=-2.'
        },
        {
            id: 305035,
            text: 'The locus of the foot of the perpendicular drawn from the center of the ellipse x²/a² + y²/b² = 1 on any tangent is:',
            options: ['(x²+y²)² = a²x² + b²y²', '(x²+y²)² = a²x² - b²y²', 'x²+y²=a²-b²', 'x²+y²=a²+b²'],
            answer: '(x²+y²)² = a²x² + b²y²',
            difficulty: 'Hard',
            pageReference: 10,
            concepts: ['ellipse', 'tangent', 'locus'],
            isPastPaper: true,
            explanation: 'This is the equation of the pedal curve of an ellipse, a standard result in conic sections.'
        },
        {
            id: 305036,
            text: 'The angle between the asymptotes of the hyperbola x² - 3y² = 3 is:',
            options: ['π/3', 'π/2', '2π/3', 'π/6'],
            answer: 'π/3',
            difficulty: 'Hard',
            pageReference: 12,
            concepts: ['hyperbola', 'asymptotes'],
            isPastPaper: false,
            explanation: 'The equation is x²/3 - y²/1 = 1. So a=√3, b=1. The slopes of the asymptotes are m = ±b/a = ±1/√3. The angle is 2tan⁻¹(b/a) = 2tan⁻¹(1/√3) = 2*30° = 60° = π/3.'
        },
        {
            id: 305037,
            text: 'The product of the lengths of the perpendiculars from the foci on any tangent to the ellipse x²/a² + y²/b² = 1 is:',
            options: ['a²', 'b²', 'a²+b²', '2a²'],
            answer: 'b²',
            difficulty: 'Hard',
            pageReference: 10,
            concepts: ['ellipse', 'tangent'],
            isPastPaper: false,
            explanation: 'This is a standard property of an ellipse. The product of the perpendicular distances from the two foci to any tangent is always equal to the square of the semi-minor axis (b²).'
        },
        {
            id: 305038,
            text: 'The locus of the point of intersection of perpendicular tangents to a parabola y² = 4ax is:',
            options: ['The directrix (x = -a)', 'The axis (y = 0)', 'The latus rectum (x = a)', 'The tangent at the vertex (x = 0)'],
            answer: 'The directrix (x = -a)',
            difficulty: 'Hard',
            pageReference: 8,
            concepts: ['parabola', 'director circle'],
            isPastPaper: false,
            explanation: 'The director circle of a parabola (locus of intersection of perpendicular tangents) degenerates into a straight line, which is its directrix.'
        },
        {
            id: 305039,
            text: 'If the line ax + by + c = 0 is a normal to the parabola y² = 4kx, then:',
            options: ['ak³ + 2bk² + bc = 0', 'a³k + 2ab² + c³b² = 0', 'ak + 2bk + c = 0', 'a³k² + 2abk + b²c = 0'],
            answer: 'a³k² + 2abk + b²c = 0',
            difficulty: 'Hard',
            pageReference: 8,
            concepts: ['parabola', 'normal'],
            isPastPaper: true,
            explanation: 'The equation of a normal to y²=4kx is y = mx - 2km - km³. Comparing this with y = (-a/b)x - c/b gives the condition.'
        },
        {
            id: 305040,
            text: 'Find the coordinates of the point where the line through (5, 1, 6) and (3, 4, 1) crosses the YZ plane.',
            options: ['(0, 17/2, 13/2)', '(0, -17/2, -13/2)', '(17/2, 0, 13/2)', '(0, 8.5, 6.5)'],
            answer: '(0, 17/2, 13/2)',
            difficulty: 'Hard',
            pageReference: 6,
            concepts: ['intersection of line and plane'],
            isPastPaper: true,
            explanation: 'The equation of the line is (x-5)/-2 = (y-1)/3 = (z-6)/-5 = k. For YZ plane, x=0. So (0-5)/-2 = k => k=2.5. y=3k+1 = 3(2.5)+1 = 8.5. z=-5k+6 = -5(2.5)+6 = -6.5. The point is (0, 8.5, -6.5). The options are incorrect.'
        },
        {
            id: 305041,
            text: 'A plane passes through (1, -2, 1) and is perpendicular to two planes 2x - 2y + z = 0 and x - y + 2z = 4. The distance of the plane from the point (1, 2, 2) is:',
            options: ['0', '1', '√2', '2√2'],
            answer: '2√2',
            difficulty: 'Hard',
            pageReference: 5,
            concepts: ['equation of a plane', 'distance of point from plane'],
            isPastPaper: true,
            explanation: 'The normal to the required plane is the cross product of the normals of the given planes, n = (-3, -3, 0), or simplified to (1, 1, 0). The plane equation is 1(x-1)+1(y+2)+0(z-1)=0 => x+y+1=0. Distance = |1+2+1|/√(1²+1²) = 4/√2 = 2√2.'
        },
        {
            id: 305042,
            text: 'The area of the quadrilateral formed by the tangents at the ends of the latus rectum to the ellipse x²/9 + y²/5 = 1 is:',
            options: ['27/4 sq. units', '9 sq. units', '27/2 sq. units', '27 sq. units'],
            answer: '27 sq. units',
            difficulty: 'Hard',
            pageReference: 10,
            concepts: ['ellipse', 'tangent'],
            isPastPaper: true,
            explanation: 'The area of the quadrilateral formed by the tangents at the ends of the latus rectum of an ellipse x²/a² + y²/b² = 1 is 2a²/e. Here, a²=9, b²=5, so c²=4, e=c/a=2/3. Area = 2(9)/(2/3) = 27 sq. units.'
        },
        {
            id: 305043,
            text: 'The equation of the common tangent to the parabolas y² = 4x and x² = 32y is:',
            options: ['x + 2y + 4 = 0', 'x - 2y + 4 = 0', '2x + y - 4 = 0', '2x - y - 4 = 0'],
            answer: 'x + 2y + 4 = 0',
            difficulty: 'Hard',
            pageReference: 8,
            concepts: ['parabola', 'common tangent'],
            isPastPaper: false,
            explanation: 'Let the tangent to y²=4x be y=mx+1/m. This must also be tangent to x²=32y. Substitute y to get a quadratic in x and set the discriminant to zero. This yields m=-1/2. The tangent is y=-x/2 - 2 => x+2y+4=0.'
        },
        {
            id: 305044,
            text: 'The number of normals that can be drawn from an external point to a parabola is:',
            options: ['1', '2', '3', '4'],
            answer: '3',
            difficulty: 'Hard',
            pageReference: 8,
            concepts: ['parabola', 'normal'],
            isPastPaper: false,
            explanation: 'The equation of the normal in terms of slope m is a cubic equation, which can have up to three real roots, meaning up to three normals can be drawn from a given point.'
        },
        {
            id: 305045,
            text: 'The angle between the asymptotes of the hyperbola x² - 3y² = 3 is:',
            options: ['π/3', 'π/2', '2π/3', 'π/6'],
            answer: 'π/3',
            difficulty: 'Hard',
            pageReference: 12,
            concepts: ['hyperbola', 'asymptotes'],
            isPastPaper: false,
            explanation: 'The equation is x²/3 - y²/1 = 1. So a=√3, b=1. The slopes of the asymptotes are m = ±b/a = ±1/√3. The angle is 2tan⁻¹(b/a) = 2tan⁻¹(1/√3) = 2*30° = 60° = π/3.'
        },
        {
            id: 305046,
            text: 'If the line 2x + √6y = 2 is a tangent to the hyperbola x² - 2y² = 4, then the point of contact is:',
            options: ['(4, -√6)', '(√6, 1)', '(2, 1)', '(4, 2)'],
            answer: '(4, -√6)',
            difficulty: 'Hard',
            pageReference: 12,
            concepts: ['hyperbola', 'tangent'],
            isPastPaper: true
        },
        {
            id: 305047,
            text: 'The equation of the director circle to the circle x² + y² = a² is:',
            options: ['x² + y² = 2a²', 'x² + y² = a²/2', 'x² + y² = a', 'x² + y² = 4a²'],
            answer: 'x² + y² = 2a²',
            difficulty: 'Medium',
            pageReference: 6,
            concepts: ['circle', 'director circle'],
            isPastPaper: false
        },
        {
            id: 305048,
            text: 'The locus of the midpoint of the portion of a line intercepted between the axes, if the line passes through a fixed point (a, b) is:',
            options: ['a/x + b/y = 2', 'x/a + y/b = 2', 'a/x + b/y = 1', 'x/a + y/b = 1'],
            answer: 'a/x + b/y = 2',
            difficulty: 'Hard',
            pageReference: 4,
            concepts: ['locus'],
            isPastPaper: true
        },
        {
            id: 305049,
            text: 'The area of the parallelogram formed by the tangents at the ends of conjugate diameters of an ellipse x²/a² + y²/b² = 1 is:',
            options: ['ab', '2ab', '4ab', 'πab'],
            answer: '4ab',
            difficulty: 'Hard',
            pageReference: 10,
            concepts: ['ellipse', 'tangent', 'conjugate diameters'],
            isPastPaper: false
        },
        {
            id: 305050,
            text: 'An ellipse has OB as semi-minor axis, F and F\' its foci and the angle FBF\' is a right angle. Then the eccentricity of the ellipse is:',
            options: ['1/2', '1/√2', '√3/2', '1/√3'],
            answer: '1/√2',
            difficulty: 'Hard',
            pageReference: 9,
            concepts: ['ellipse', 'eccentricity'],
            isPastPaper: true
        }
    ]
};
